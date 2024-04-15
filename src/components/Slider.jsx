import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import  '../styles/slider.css'

const Slider = ({start}) => {
    return (
        <Carousel fade>
            {start.map((item) => (
                <Carousel.Item>
                    <img className='d-block w-100' src={item} alt='' />
                </Carousel.Item>
            ))}
        </Carousel>

        // <Carousel className='slider-carousel' fade>
        //     <Carousel.Item>
        //         <img className='d-block w-100' src= "https://i02.appmifile.com/173_operator_in/09/06/2021/fde866737ea0357305c2d1c852541460.gif" alt="" />
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img className='d-block w-100' src= "https://i02.appmifile.com/615_operator_in/05/07/2021/a4b26d6b2ad2d6d2edbfb23a8482328e.jpg" alt="" />
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img className='d-block w-100' src=  "https://i02.appmifile.com/762_operator_in/05/07/2021/4c90dda893b43e0153950f36ee37dc03.jpg" alt="" />
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img className='d-block w-100' src=  "https://i02.appmifile.com/645_operator_in/02/06/2021/4e32c24cfdf8c48ad1bc911807cac09e.jpg" alt="" />
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img  className='d-block w-100'src=  "https://i02.appmifile.com/232_operator_in/04/06/2021/568c8fd7c3c4368c14c8ef64cda7866b.jpg" alt="" />
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img  className='d-block w-100' src=  "https://i02.appmifile.com/3_operator_in/08/06/2021/3e2d6457a1e569145f66318a17ea1e03.jpg" alt="" />
        //     </Carousel.Item>
            
        // </Carousel>
    );
};

export default Slider;
