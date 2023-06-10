import banner1 from "../../../assets/home/banner1.png"
import banner2 from "../../../assets/home/banner2.png"
import banner3 from "../../../assets/home/banner3.png"
import banner4 from "../../../assets/home/banner4.png"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./Hero.css"




const Hero = () => {


    return (
        <Carousel className="carousel w-full  text-center" autoPlay={true} infiniteLoop showThumbs={false}>
            
            <div className="relative">
                <img src={banner1} className="w-full" />
                <div className="carousel-content w-[90%] md:w-[60%] top-[40%] mt-5 md:mt-0" >
                    <h1 className="text-2xl md:text-6xl text-white uppercase ">TAKING YOGA BEYOND THE MAT training</h1>
                    <button className="bg-white px-6 uppercase rounded-full mt-4 py-2 md:py-3 md:mt-8 md:px-10">Learn More</button>
                </div>
            </div>

            <div className="relative">
                <img src={banner2} className="w-[500px]" />
                <div className="carousel-content w-[90%] md:w-[60%] top-[40%] mt-5 md:mt-0">
                    <h1 className="text-2xl md:text-6xl text-white uppercase ">Do your practice and    all is coming</h1>
                    <button className="bg-white px-6 uppercase rounded-full mt-4 py-2 md:py-3 md:mt-8 md:px-10">Learn More</button>
                </div>
            </div>

            <div className="relative">
                <img src={banner3} className="w-full" />
                <div className="carousel-content w-[90%] md:w-[60%] top-[40%] mt-5 md:mt-0">
                    <h1 className="text-2xl md:text-6xl text-white uppercase ">You cannot do yoga is your natural state</h1>
                    <button className="bg-white px-6 uppercase rounded-full mt-4 py-2 md:py-3 md:mt-8 md:px-10">Learn More</button>
                </div>
            </div>

            <div className="relative">
                <img src={banner4} className="w-full" />
                <div className="carousel-content w-[90%] md:w-[60%] top-[40%] mt-5 md:mt-0">
                    <h1 className="text-2xl md:text-6xl text-white uppercase ">YOU CAN ALWAYS CONTROL  Yoga is your natural state</h1>
                    <button className="bg-white px-6 uppercase rounded-full mt-4 py-2 md:py-3 md:mt-8 md:px-10">Learn More</button>
                </div>
            </div>
        </Carousel>
    );

};
export default Hero;