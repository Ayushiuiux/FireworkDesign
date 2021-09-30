import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './Carousel';
// import CardImg1 from '../assets/images/character/char1.png';
// import CardImg2 from '../assets/images/character/char2.png';
// import CardImg3 from '../assets/images/character/char6.png';


export default function Swiper() {
    return (
        <div className="multi_card">
            <h1>Carousel</h1> 
            <Carousel />
        </div>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Swiper />, rootElement);
