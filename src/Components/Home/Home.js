import React from 'react';
import './Home.css';
import Product from '../Product/Product';

function Home() {
    return (
        <div className="home">
            <div className="home-container">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="feature-banner" className='feature-banner-image' />
                <div className="home-row">
                    <Product id={123231} title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" price={19.99} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" />

                    <Product id={789654} title="Keenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" price={239.99} rating={4} image="https://www.costco.co.uk/medias/sys_master/images/h5d/hd2/31246443118622.jpg" />
                </div>
                <div className="home-row">
                    <Product id={786854} title="SAMSUNG 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED Computer Monitor" price={439.99} rating={4} image="https://images.samsung.com/is/image/samsung/za-curved-c49j89-lc49j890dkuxen-frontblack-116131161?$650_519_PNG$" />

                    <Product id={435468} title="Echo Dot (4th generation) International Version | Smart speaker with Alexa | Charcoal" price={99.99} rating={4} image="https://i.pcmag.com/imagery/reviews/04e3bEzJD7ng3WviIdH5URF-1.fit_lim.size_1050x591.v1601313845.jpg" />

                    <Product id={980321} title="Apple 2022 11-inch iPad Pro (Wi-Fi, 128GB) - Space Gray (4th Generation)" price={739.99} rating={4} image="https://www.zebrs.com/uploads/zebrs/products/apple-2022-11-inch-ipad-pro-wi-fi-128gb---space-grey-4th-generation-530229_l.jpg" />
                </div>
                <div className="home-row">
                    <Product id={462354} title="Lenovo IdeaPad Gaming 3i - 2022 - Everyday Gaming Laptop - NVIDIA GeForce RTX 3050Ti Graphics - 15.6 FHD Display - 8GB Memory - 512GB Storage - Intel i7 12th Gen - Onyx Grey" price={899.99} rating={4} image="https://www.lenovo.com/medias/lenovo-laptop-legion-ideapad-3-gaming-hero.png?context=bWFzdGVyfHJvb3R8MjE5OTA5fGltYWdlL3BuZ3xoYWMvaDVlLzE0MzI1NjEyNTQ0MDMwLnBuZ3xiMTdhY2FiMTg2YmYyZDIzNGZlMDNhNjM5YmEzZWMwZWEzZjVkNWEwODg1MDU3YzczNmZhYWNmNTBjYjM1ODA3" />
                </div>
            </div>
        </div>
    );
}

export default Home;