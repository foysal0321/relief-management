import imgs from '../../assets/images/photo-1505155485412-30b3a45080ec.avif'
import icon1 from '../../assets/icons/icon-01.png'
import icon2 from '../../assets/icons/icon-02.png'
import icon3 from '../../assets/icons/icon-03.png'
import icon4 from '../../assets/icons/icon-04.png'
import { motion } from 'framer-motion'

function Header() {
    const animateHearde = {
        hidden: {
            scale: 0.7,
            opacity: 0.7,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                ease: "linear",
                duration: 1,
            },
        },

    }
    return (
        <div>
            <div className="">
                <div className='relative bg-gradient-to-l from-[#131313d8] to-[#000000] h-screen  w-full'>
                    <img className='absolute w-full h-screen mix-blend-overlay' src={imgs} alt="" />
                    <motion.div
                        variants={animateHearde}
                        initial="hidden"
                        animate='visible'
                        className="max-w-[600px] p-10 md:mx-10  text-white">
                        <h1 className='text-6xl md:mt-20 py-6'>Disaster <br /> <span className='font-bold'>Ceisis</span>  Relief</h1>
                        <div className="flex flex-wrap gap-4 py-4 absolute ">
                            <img className='' src={icon1} alt="" />
                            <img src={icon2} alt="" />
                            <img src={icon3} alt="" />
                            <img src={icon4} alt="" />
                        </div>
                        <div className="flex gap-4 py-4  mt-56 md:mt-32">
                            <button className='btn btn-outline text-white ' >
                                Learn More
                            </button>
                            <button className='btn btn-primary' >
                                Donate Now
                            </button>

                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Header
