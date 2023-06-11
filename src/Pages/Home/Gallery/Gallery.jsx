import titleImg from "../../../assets/home/img/floral-decor@2x.png"

const Gallery = () => {

    return (
        <div className="bg-[#F1E8D1] py-10 md:py-24">
            <div className="w-1/2 mx-auto text-center">
                <h1 className="text-4xl font-bold uppercase">Gallery</h1>
                <div className="flex items-center justify-center mt-4">
                    <span className="me-1">======================== </span>
                    <img src={titleImg} alt="img" className="w-[80px]" />
                    <span className="ms-1"> ========================</span>
                </div>
                <p className="my-6">We at KRIYA provide various services to the nature of the clients. Wish how you would like to spend the time here we can talk and come to a conclusion.
                </p>
            </div>
            <div className="flex gap-5 justify-between mt-12 md:w-[90%] mx-auto">
                <div className="md:w-[25%] text-center p-8 bg-[#D4AC75]"
                    data-aos="zoom-in"
                    data-aos-duration="300"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-anchor-placement="top-center"
                >
                    <h4 className="text-3xl tracking-wider border-b-4 pb-4 border-[#7E8446] border-dotted">Memories</h4>
                    <p className="mt-8">We at KRIYA provide various services to the nature of the clients. Wish how you would like to spend the time here we can talk and come to a conclusion.</p>
                    <button className="bg-white hover:bg-[#7e8446] hover:text-white duration-300 px-4 uppercase rounded-full mt-4 py-2 md:py-3 md:mt-8 md:px-6">view Gallery</button>
                </div>
                <div className="w-[25%]">
                    <img src="https://kriyawp.wpengine.com/wp-content/uploads/2016/06/gallery1.jpg" alt="" className="w-full" />
                </div>
                <div className="grid grid-cols-1 gap-5">
                    {/* gfygyuui */}
                    <div className="w-[250px] bg-white border-[10px] border-white shadow"
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="100"
                    >
                        <img src="https://kriyawp.wpengine.com/wp-content/uploads/2014/01/gallery2.jpg" alt="" />
                    </div>
                    <div className="w-[250px] bg-white border-[10px] border-white shadow"
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="500"
                    >
                        <img src="https://kriyawp.wpengine.com/wp-content/uploads/2014/01/gallery3.jpg" alt="" />
                    </div>

                    {/* hjgh */}

                </div>
                <div className="w-[25%]">
                    <img src="https://kriyawp.wpengine.com/wp-content/uploads/2016/06/gallery1.jpg" alt="" className="w-full" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;