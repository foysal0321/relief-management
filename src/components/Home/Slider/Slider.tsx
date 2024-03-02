import { FreeMode, Pagination } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './styles.css';
import { motion } from 'framer-motion'


function Slider() {

  const animateType = {
    hidden: {
      y: -80,
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: 100,
      transition: {
        duration: 1,
      },
    },

  }
  return (
    <motion.div
      variants={animateType}
      initial="hidden"
      animate="visible"
      className='py-20'>
      <h1 className='text-5xl font-bold py-8 p-5  text-gray-700'>We were created to reflect God’s <br /> love in the world</h1>
      <p className='mx-5 text-xl mb-16'>Praising pain was born and I will give you a complete accountwill give you a complete account</p>
      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          freeMode={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10
            },
          }}

          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="h-[350px] w-full hover:opacity-60 duration-75">
              <img className='relative ' src="https://kodeforest.net/wp-demo/disaster-relief/wp-content/uploads/2017/04/blog2-350x350.jpg" alt="" />
              <p className=' bg-red-400 p-6 text-center text-white'>Food Donate</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[350px] w-full hover:opacity-60 duration-75">
              <img className='relative ' src="https://www.shutterstock.com/image-photo/malikenya-agust-23-2021happy-boy-600nw-2160757739.jpg" alt="" />
              <p className=' bg-red-400 p-6 text-center text-white'>Drinking</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[350px] w-full hover:opacity-60 duration-75">
              <img className='relative ' src="https://cdn.givecloud.co/s/files/1/0000/1060/files/orphan-from-gaza.jpeg" alt="" />
              <p className='bg-red-400 p-6 text-center text-white'>Education</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[350px] hover:opacity-60 duration-75">
              <img className='relative ' src="https://img.freepik.com/free-photo/close-up-people-holding-apples-bag_23-2149182018.jpg" alt="" />
              <p className=' bg-red-400 p-6 text-center text-white'>Food Donate</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hover:opacity-60 duration-75">
              <img className='relative h-20' src="https://lagosfoodbank.org/wp-content/uploads/2020/12/LFBI-Beneficial5.jpg" alt="" />
              <p className='bg-red-400 p-6 text-center text-white'>Clothing</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[350px] w-full hover:opacity-60 duration-75">
              <img className='relative ' src="https://heart.axiomthemes.com/wp-content/uploads/2023/09/image-38-copyright-1536x1024.jpg" alt="" />
              <p className='bg-red-400 p-6 text-center text-white'>Orphanage</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[350px] w-full hover:opacity-60 duration-75">
              <img className='relative ' src="https://heart.axiomthemes.com/wp-content/uploads/2023/09/image-40-copyright-1536x1024.jpg" alt="" />
              <p className='bg-red-400 p-6 text-center text-white'>Medical</p>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </motion.div>
  )
}

export default Slider
