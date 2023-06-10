import titleImg from "../../../assets/home/img/floral-decor@2x.png"

const Gallery = () => {

    return (
        <div className="bg-[#F1E8D1] py-24">
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
            
        </div>
    );
};

export default Gallery;