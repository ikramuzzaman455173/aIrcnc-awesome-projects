import { useEffect, useState } from 'react'
import Container from '../Shared/Container'
import Room from './Room'
import Loader from '../Shared/Loader'
import { useSearchParams } from 'react-router-dom'
import Heading from '../Shared/Heading'
// import HeartButton from '../../assets/images/'

const Rooms = () => {
  const [params, setParams] = useSearchParams()
  const category = params.get('category')
  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch(`/Rooms.json`)
      .then(response => response.json())
      .then(data => {
        if (category) {
          const filtered = data.filter(room => room.category === category)
          setRooms(filtered)
        }
        else {
          setRooms(data)
        }
        setLoading(false)
      }).catch(error => console.log(`404 page not found ${error}`))
  }, [category])
  if (loading) {
    return (<><Loader /></>)
  }

  return (
    <>
      <Container>
        {rooms && rooms.length > 0 ? <>
          <div className='pt-12 grid grid-cols-1 sm:gird-cols-2 md:gird-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
            {rooms.map((item, i) => <Room key={i} item={item} />)}
          </div>
        </> :
          <div className='pt-12'>
            <Heading title={'No Rooms Available In This Category !'} subtitle={'Please Select Other Categories !'} center={true} />
          </div>}
      </Container>
    </>
  )
}

export default Rooms