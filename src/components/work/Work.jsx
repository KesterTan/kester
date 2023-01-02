import React from 'react'
import './work.css'
import hypotenuseImg from '../../assets/hypotenuseai.png'
import shopbackImg from '../../assets/shopback.png'

// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        logo: hypotenuseImg,
        name: 'Hypotenuse AI',
        review: `Created the second largest growth channel for Hypotenuse AI, a YC S20 AI company that automatically writes 
        written content with a few input keywords.`
    },
    {
        logo: shopbackImg,
        name: 'ShopBack',
        review: `Kicked off my journey in tech by working at ShopBack, a multi-million dollar 
        cashback reward startup.`
    }
]

const Work = () => {
  return (
    <section id="work">
        <h5>What I've Done</h5>
        <h2>Work</h2>

        <Swiper className="container work__container"
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{clickable: true}}>
            {
                data.map(({logo, name, review}, index) => {
                    return (
                        <SwiperSlide key={index} className="work">
                            <div className="work__logo">
                                <img src={logo} alt={name}/>
                            </div>
                            <h5 className='work__name'>{name}</h5>
                            <small className='work__review'>
                            {review}
                            </small>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    </section>
  )
}

export default Work