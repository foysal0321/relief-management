import { Bath, HandHelping } from "lucide-react"

function Gallery() {
    return (
        <div>
            <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-wrap justify-center gap-10 p-5">
                    <div className="diff aspect-[16/9] max-w-[500px] ">
                        <div className="diff-item-1">
                            <img className="" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTCWu_5QEdEc5tu8Ph0Zcdqt5qE12dnQt43Dk7wlNw0OYS5Amdz" alt="" />

                        </div>
                        <div className="diff-item-2">
                            <img src="https://lh5.googleusercontent.com/p/AF1QipM9zAeM9WsE5Dbgwrb9ScMJyJo4Isu5mnzlNkfN=w360-h240-n-k-no" alt="" />
                        </div>
                        <div className="diff-resizer"></div>
                    </div>
                    <div className="max-w-[500px] py-16">
                        <h1 className="text-5xl font-bold">Our missions spread hope</h1>
                        <p className="py-6 text-gray-700 text-md">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit <br /> aspernatur aut odit aut fugit, sed quia.</p>
                        <div className=" flex gap-5">
                            <Bath size={40} />
                            <div className="">
                                <h1 className="text-xl font-bold">Get involved</h1>
                                <p className="py-3">Natus error sit voluptatem accus antium doloremque</p>
                            </div>
                        </div>
                        <div className="py-4 flex gap-5">
                            <HandHelping size={40} />
                            <div className="">
                                <h1 className="text-xl font-bold">Help children</h1>
                                <p className="py-3">Sit voluptatem accus antium doloremque laudan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 max-w-[1200px] mx-auto gap-8 py-12 mt-10 text-center">
                <div className="bg-slate-50 p-5">
                    <h1 className="text-7xl font-extrabold text-gray-200">98</h1>
                    <p className="text-xl font-bold py-4">Projects</p>
                </div>
                <div className="bg-slate-50 p-5">
                    <h1 className="text-7xl font-extrabold text-gray-200">50+</h1>
                    <p className="text-xl font-bold py-4">Sponsors</p>
                </div>
                <div className="bg-slate-50 p-5">
                    <h1 className="text-7xl font-extrabold text-gray-200">3+</h1>
                    <p className="text-xl font-bold py-4">Years</p>
                </div>
                <div className="bg-slate-50 p-5">
                    <h1 className="text-7xl font-extrabold text-gray-200">15</h1>
                    <p className="text-xl font-bold py-4">Countries</p>
                </div>


            </div>
        </div>
    )
}

export default Gallery
