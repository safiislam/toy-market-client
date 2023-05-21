import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()


const Slider = () => {
    return (

        <div className="carousel w-full md:w-[90%] mx-auto mt-9 rounded ">
            <div id="slide1" className="carousel-item relative w-full  h-[450px]  md:h-[600px]">
                <img src="https://images.unsplash.com/photo-1532330393533-443990a51d10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" className="w-full " />
                <div data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center" className="flex flex-col justify-center pl-8 space-y-3 absolute text-white w-full top-0 bottom-0 bg-gradient-to-r from-[#040404c0] to-[#6565651a]">
                    <p className=" text-xl md:text-5xl font-bold">Revved Up Toy Car Fun</p>
                    <p>Experience the thrill of high-speed races and epic stunts with our incredible collection of toy cars</p>
                    <a className=' border-2 cursor-pointer hover:border-blue-600 w-36 ps-8 py-2 rounded ' >show more</a>
                </div>
                <div className="absolute flex justify-between  transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full h-[450px]  md:h-[600px]">
                <img src="https://images.unsplash.com/photo-1626023772800-eadff10c0f9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" className="w-full" />
                <div data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center" className="flex flex-col justify-center pl-8 space-y-3 absolute text-white w-full top-0 bottom-0 bg-gradient-to-r from-[#040404c0] to-[#6565651a]">
                    <p className=" text-xl md:text-5xl font-bold">Revved Up Toy Car Fun</p>
                    <p>Experience the thrill of high-speed races and epic stunts with our incredible collection of toy cars</p>
                    <a className=' border-2 cursor-pointer hover:border-blue-600 w-36 ps-8 py-2 rounded ' >show more</a>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-[450px]  md:h-[600px]">

                <img src="https://images.unsplash.com/photo-1598084991519-c90900bc9df0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80" className="w-full" />
                <div data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center" className="flex flex-col justify-center pl-8 space-y-3 absolute text-white w-full top-0 bottom-0 bg-gradient-to-r from-[#040404c0] to-[#6565651a]">
                    <p className=" text-xl md:text-5xl font-bold">Revved Up Toy Car Fun</p>
                    <p>Experience the thrill of high-speed races and epic stunts with our incredible collection of toy cars</p>
                    <a className=' border-2 cursor-pointer hover:border-blue-600 w-36 ps-8 py-2 rounded ' >show more</a>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>

    );
};

export default Slider;


// src="https://images.unsplash.com/photo-1598084991519-c90900bc9df0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
// src="https://images.unsplash.com/photo-1532330393533-443990a51d10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
// src="https://images.unsplash.com/photo-1626023772800-eadff10c0f9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 