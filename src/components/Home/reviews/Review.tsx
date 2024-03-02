import { MoveLeft, MoveRight } from "lucide-react";
import { useRef } from "react";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './style.css';
import { Navigation } from 'swiper/modules';
import { useGetReviewQuery } from "../../../redux/feauters/user-reviews/reviewApi";

export default function Review() {

    const swiperRef: any = useRef();
    const { data } = useGetReviewQuery(undefined)
    //console.log(data);


    return (
        <div className='py-12 '>
            <div className="py-20">
                <div className=" py-12 flex justify-between flex-wrap p-6">
                    <h1 data-aos="fade-down" data-aos-duration="1000" className='text-4xl font-extrabold py-3'>What our church volunteers say</h1>
                    <div className="flex">
                        <button className='bg-gray-200 p-4 rounded-full' onClick={() => swiperRef.current?.slidePrev()}> <MoveLeft className='text-gray-500 ' size={28} /> </button>
                        <button className='bg-[#3461FF] p-4 rounded-full mx-4' onClick={() => swiperRef.current?.slideNext()}> <MoveRight className='text-white ' size={28} /> </button>

                    </div>
                </div>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    grabCursor={true}

                    modules={[Navigation]}
                    onBeforeInit={(swiper: any) => {
                        swiperRef.current = swiper;
                    }}

                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        1024: {
                            slidesPerView: 1,
                            spaceBetween: 40
                        },
                    }}

                    className="mySwiper"
                >
                    {
                        data?.map((d: any, i: string) => (
                            <SwiperSlide key={i}>
                                <div className="w-[800px] py-6 bg-slate-50 p-6 text-black rounded-lg">
                                    <div className=" p-5 mt-4">
                                        <div className="avatar placeholder">
                                            <div className="bg-neutral text-neutral-content rounded-full w-32">
                                                <span className="text-3xl">D</span>
                                            </div>
                                        </div>
                                        <div className="mx-4 ">
                                            <h1 className='text-xl font-bold py-1'>{d.name}</h1>
                                            <p className='text-sm'>{d.address}</p>
                                        </div>
                                    </div>
                                    <p className='p-3 mx-20 text-sm'>{d.description}</p>
                                </div>
                            </SwiperSlide>
                        ))
                    }


                </Swiper>

            </div>
        </div>
    );
}


{/* <SwiperSlide key={i}>
<div className="max-w-[800px] py-6 bg-gray-50 p-6 text-black rounded-lg">
    <div className="flex p-5 mt-4">
        <div className="avatar placeholder">
            <div className="bg-neutral text-neutral-content rounded-full w-16">
                <span className="text-3xl">D</span>
            </div>
        </div>
        <div className="mx-4">
            <h1 className='text-xl font-bold py-1'>{d.name}</h1>
            <p className='text-sm'>{d.address}</p>
        </div>
    </div>
    <p className='p-3 mx-20 text-sm'>{d.description}</p>
</div> */}