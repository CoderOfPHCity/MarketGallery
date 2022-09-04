import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from '../firebase.config'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])



function Slider() {
    const [loading, setLoadig] = useState(true)
    const [listings, setListings] = useState(null)

    const navigate = useNavigate()

    useEffect(() =>{
        const fetchD = async() =>{
             const listRef = collection(db, listings)
        const q = query(listRef, orderBy('timestamp', 'desc', limit(5)))
        const querysnap = await getDocs(q)

        let listings = []
        querysnap.forEach((doc) =>{
            return listings.push({
                id: doc.id,
                data: doc.data()
            })
        })
        setListings(listings)
        setLoadig(false)

        fetchD()
    }}, [])

}

if(loading) {
    return <h1>Loading...</h1>
}

return(
    listings &&(
        <>
        <p className='exploreHeading'>Recommended</p>

        <Swiper slidePerView={1} pagination={{clickable: true}}>
            {listings.map(({data, id}) =>(
                <SwiperSlide key={id} onClick={() => navigate(`/category/${data.type}/$
                {id}`)}>

                    <div
                    style={{
                        background: `url(${data.imgUrls[0]}) center no-repeat`,
                        backgroundSize: 'cover',
                    }}
                    className= 'swiperSlideDiv'>
                        <p className='swiperSlideText'>{data.name}</p>
                        <P className='swiperSlidePrice'>
                            ${data.discountedprice ?? data.regularprice}{''}
                            {data.type === 'rent' && '/month'}

                        </P>

                    </div>

            

                </SwiperSlide>
            ))}
        </Swiper>



        </>

    )
)

export default Slider