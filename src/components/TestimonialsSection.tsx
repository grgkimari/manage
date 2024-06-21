"use client"
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Testimonial from "./Testimonial";


export default function TestimonialsSection(){
    return <section id="testimonials" className="">
        <div className="">
        <h2 className='text-4xl font-bold text-center mt-4'>Testimonials</h2>
            <div className=" flex max-w-full min-h-96 items-center justify-center">
                
                <Swiper spaceBetween={10} slidesPerView={1} 
                autoplay={{
                    delay : 3500,
                    disableOnInteraction : false
                }}
                
                pagination ={{clickable : true}}
                modules={[EffectCoverflow,Pagination, Autoplay]}
                effect='coverflow'
                 className='flex justify-center'>

                
            <SwiperSlide className='swiperSlide w-full'><Testimonial avatarSrc="/avatar-anisha.png" name="Anisha Lee" comment="Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones helps keep everyone motivated."/></SwiperSlide>
            <SwiperSlide className='swiperSlide'><Testimonial avatarSrc="/avatar-ali.png" name="Ali Bravo" comment="We have been able to cancel so many other subscriptions since using manage. There is no more cross channel confusion and everyone is more focused."/>
            </SwiperSlide ><SwiperSlide className='swiperSlide'> <Testimonial avatarSrc="/avatar-richard.png" name="Richard Watt" comment="Manage has enabled the team to collaborate seamlessly, address bottlenecks and minimize confusion about tasks. This keeps all team members on the same page."/></SwiperSlide></Swiper>
            
            </div>
        </div>
        
    </section>
}