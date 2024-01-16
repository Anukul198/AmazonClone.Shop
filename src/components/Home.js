import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useStateValue } from '../context/StateProvider';
import auth from "../firebase";
import "./Home.css";
import Product from './Product';

function Home() {

    const [{ basket },dispatch] = useStateValue();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("user>>>>", user.email);

                dispatch({
                    type: "login",
                    user: user.email,
                })
            } else {
                dispatch({
                    type: "logout",
                    user: null,
                })
            }
        })
    },[])

  return (
    <div className='home'>
        <div className='home__carousel'>
            <Carousel
                infiniteLoop="true"
                autoPlay="true"
                interval={4000}
                showThumbs={false}
            >
                <img 
                    className='carousel__image'
                    src='https://m.media-amazon.com/images/I/61Cmk-WPjQL._SX3000_.jpg'
                    alt='carousel1'
                />
                <img 
                    className='carousel__image'
                    
                    src='https://m.media-amazon.com/images/I/61st3hoBe9L._SX3000_.jpg'
                    alt='carousel2'
                />
                <img 
                    className='carousel__image'
                    
                    src='https://m.media-amazon.com/images/I/71HVyMMRdqL._SX3000_.jpg'
                    alt='carousel3'
                />
            </Carousel> 
        </div>
        
        <div className='home__body'>
            <div className='product__row'>
                  <Product 
                      id={58796401}

                      description="Lava Agni 5G |64 MP AI Quad Camera| (8GB RAM/128 GB ROM)| 5000 mAh Battery| Superfast 30W Fast Charging| 6.78 inch Big Screen (Fiery Blue)"
                      rating={5}
                      image="https://m.media-amazon.com/images/I/71Ut7O9cKVL._SL1500_.jpg"
                      price={18900}
                  />
                  <Product 
                      id={58796402}
                      description="Marshall Stanmore II Wireless Bluetooth Speaker (Black) (1002485)"
                      rating={3}
                      image="https://m.media-amazon.com/images/I/71VfR7Xhk8L._SL1000_.jpg"
                      price={34800}
                  />
                  <Product 
                      id={58796407}
                      description="boAt Rockerz 330 Bluetooth Neckband with Upto 30 Hours Playtime, ASAP™ Charge, boAt Signature Sound, Dual Pairing & IPX5(Navy Blue)"
                      rating={1}
                      image="https://m.media-amazon.com/images/I/514sHd2+YyS._SL1500_.jpg"
                      price={1599}
                   />
            </div>
            <div className='product__row'>
            <Product 
                      id={58796403}
                      description="Noise Newly Launched Buds X Prime in-Ear Truly Wireless Earbuds with 120H of Playtime, Quad Mic with ENC, Instacharge(10 min=200 min),Premium Dual Tone Finish, 11mm Driver, BT v5.3(Sheen Green)"
                      rating={2}
                      image="https://m.media-amazon.com/images/I/610cssw9BkL._SY450_.jpg"
                      price={999}
                  />
                  <Product 
                      id={58796404}
                      description="AD by Arvind Mid Rise Skinny Fit Jeans"
                      rating={4}
                      image="https://m.media-amazon.com/images/I/61P0AXoI40L._SX425_.jpg"
                      price={1499}
                  />
                   
            </div>
            <div className='product__row'>
                <Product 
                      id={58796406}
                      description="Van Heusen Men's Regular Fit Polo Shirt"
                      rating={4}
                      image="https://m.media-amazon.com/images/I/71WBVg0YE8L._SY550_.jpg"
                      price={659}
                  />
                  <Product 
                      id={58796405}
                      description="Shoes for Men |Latest Stylish Sports Shoes for Men |Lace-Up Lightweight White Shoes for Running, Walking, Gym,Trekking and Hiking Shoes for Men
                      "
                      rating={4}
                      image="https://m.media-amazon.com/images/I/61HnFKrY07L._SY500_.jpg"
                      price={1200}
                   />
                  
            </div>
        </div>
        
    </div>
  )
}

export default Home;
