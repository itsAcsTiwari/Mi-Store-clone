import React, { useEffect, useState } from 'react';
import NavCard from './NavCard';
import { useLocation } from 'react-router-dom';
import '../styles/NavOptions.css'

const NavOptions = ({ miPhones, redmiPhones, tv, laptop, fitnessAndLifeStyle, home, audio, accessories }) => {
    const [miPhoneToggle, setMiPhoneToggle] = useState(false);
    const [redmiPhoneToggle, setRedmiPhoneToggle] = useState(false);
    const [tvToggle, setTvToggle] = useState(false);
    const [laptopToggle, setLaptopToggle] = useState(false);
    const [fitnessToggle, setFitnessToggle] = useState(false);
    const [homeToggle, setHomeToggle] = useState(false);
    const [audioToggle, setAudioToggle] = useState(false);
    const [accessoriesToggle, setAccessoriesToggle] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setMiPhoneToggle(location.pathname === "/miphones");
        setRedmiPhoneToggle(location.pathname === "/redmiphones");
        setTvToggle(location.pathname === "/tv");
        setLaptopToggle(location.pathname === "/laptops");
        setFitnessToggle(location.pathname === "/lifestyle");
        setHomeToggle(location.pathname === "/home");
        setAudioToggle(location.pathname === "/audio");
        setAccessoriesToggle(location.pathname === "/accessories");
    }, [location.pathname]);



    return (
        <div className='navOptions'>
            {miPhoneToggle && miPhones.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            ))}

            {redmiPhoneToggle && redmiPhones.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            ))}

            {tvToggle && tv.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            ))}

            {laptopToggle && laptop.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            ))}

            {fitnessToggle && fitnessAndLifeStyle.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            ))}

            {homeToggle && home.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            ))}

            {audioToggle && audio.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            ))}

            {accessoriesToggle && accessories.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            ))}
        </div>
    );
};

export default NavOptions;
