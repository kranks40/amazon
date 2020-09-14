import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img className='home__image'
                src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'alt=''/>

                <div className="home__row">
                    <Product 
                         id={1}
                        title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover – Illustrated, September 13, 2011"
                        price={29.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
                        rating={5}
                    />
                    <Product
                         id={2}
                        title='Western Digital 1TB WD Green Internal PC SSD - SATA III 6 Gb/s, N/A, 2.5"/7mm, - WDS100T2G0A'
                        price={89.99}
                        rating={5}
                        image='https://m.media-amazon.com/images/I/81f1uMKgHtL._AC_AA180_.jpg' alt=''
                    />
                    
                </div>

                <div className="home__row">
                    <Product
                        id={3}
                        title='DJI Mavic Air 2 - Drone Quadcopter UAV with 48MP Camera 4K Video 8K Hyperlapse 1/2" CMOS Sensor Axis Gimbal 34min Flight Time ActiveTrack 3.0 Ocusync 2.0, Gray'
                        price={799.00}
                        rating={4}
                        image='https://images-na.ssl-images-amazon.com/images/I/61H6sByGqbL._AC_SL1500_.jpg' alt=''
                    />
                     <Product
                        id={4}
                        title='Universal Remote Control for LG-Smart-TV-Remote-Control All Models LCD LED 3D HDTV Smart TVs AKB75095307 AKB74915305 AKB75375604'
                        price={9.99}
                        rating={4}
                        image='https://images-na.ssl-images-amazon.com/images/I/61DqgIfZyDL._AC_SL1468_.jpg' alt=''
                        />

                    <Product
                        id={5}
                        title='Kuupo C1Q-S97 FS 55R Carburetor with Air Filter Tune Up Kit for STIHL Trimmer FS38 FS45 FS46 FS55 FS55R KM55 C1Q-S186A ZAMA Carb 4140-120-0619'
                        price={15.58}
                        rating={5}
                        image='https://images-na.ssl-images-amazon.com/images/I/71P7s43eKDL._AC_SL1000_.jpg' alt=''
                    />
                   
                 </div>

                <div className="home__row">
               
                <Product
                        id={6}
                        title='Acer Swift 3 Thin & Light Laptop, 14" Full HD IPS, AMD Ryzen 7 4700U Octa-Core with Radeon Graphics, 8GB LPDDR4, 512GB NVMe SSD, Wi-Fi 6, Backlit KB, Fingerprint Reader, Alexa Built-in, SF314-42-R9YN'
                        price={673.00}
                        rating={5}
                        image='https://images-na.ssl-images-amazon.com/images/I/71W5ZdS%2BsEL._AC_SL1500_.jpg' alt=''
                    />

                <Product
                        id={7}
                        title='Fire TV Stick 4K streaming device with Alexa built in, Dolby Vision, includes Alexa Voice Remote, latest release'
                        price={49.99}
                        rating={5}
                        image='https://images-na.ssl-images-amazon.com/images/I/51CgKGfMelL._AC_SL1000_.jpg' alt=''
                    />

                <Product
                        id={8}
                        title='Walsh WSCMSR09BK-09 Countertop Microwave Oven,6 Cooking Programs LED Lighting Push Button, 0.9 Cu. Ft/900W, Black'
                        price={85.80}
                        rating={5}
                        image='https://images-na.ssl-images-amazon.com/images/I/81LPNK9SN-L._AC_SL1500_.jpg' alt=''
                    />

                </div>
            </div>
        </div>
    )
}

export default Home;
