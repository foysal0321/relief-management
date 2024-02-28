import { motion } from "framer-motion"

function About() {
    const animateAbout = {
        hidden: {
            scale: 0.3,
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
        <div className="max-w-[1200px] mx-auto py-20 p-8 text-center">
            <h1 className="text-6xl font-bold py-8 text-gray-600">Donate</h1>
            <p className="py-2">A donation is a gift for charity, humanitarian aid, or to benefit a cause.  A donation may take various forms,<br /> including money, alms, services, or goods such as clothing, toys, food, or vehicles. <br /> A donation may satisfy medical needs such as blood or organs for transplant.</p>
            <motion.div
             variants={animateAbout}
             initial="hidden"
             animate='visible'
            className="flex flex-wrap mt-8">
                <img className='w-[350px] md:w-[550px]' src='https://images.squarespace-cdn.com/content/v1/58f6ec52ff7c5042d6755351/1510925811626-3BTKOKUB4B11XUNAWZ0W/larm-rmah-216854.jpg?format=1500w' alt="" />

                <div className=" text-center p-8 w-[350px] md:w-[500px]  bg-slate-200">
                    <h2 className="text-2xl font-bold md:mt-16 mt-8 py-4">Give where the need is greatest</h2>
                    <p>When you give to The Rotary Foundation, youfuel our service project. Project that polio. Promote peace, and improve developing communities. </p>
                    <button className="btn btn-info mt-6">Donate</button>
                </div>
            </motion.div>
        </div>
    )
}

export default About
