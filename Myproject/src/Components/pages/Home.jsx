import React from 'react';
import BigSale from './BigSale';
import OurProduct from './OurProduct';
import OurServices from './OurServices';

const Home = () => {
    return (
        <div className='container-fluid '>
            <div ></div>
            <div class="row sider ">
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item ">
                            <img src="https://brandwin.in/wp-content/uploads/2023/01/KB-127.jpg" class="d-block w-100" alt="..." style={{ "min-height": "600px" }} />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://businessviewcaribbean.com/wp-content/uploads/2020/02/sky-mall_f.jpg" class="d-block w-100" alt="..." style={{ "min-height": "600px" }} />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item active">
                            <img src="https://www.citrusplaza.com/wp-content/uploads/2021/09/Shopping-Header-2.png" class="d-block w-100" alt="..." style={{ "min-height": "600px" }} />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div class="row p-2">
                <div class="col-sm-4" >
                    <img data-aos="zoom-in-up" data-aos-duration="1000" src="https://i.huffpost.com/gen/1345109/thumbs/o-MEN-SHOPPING-570.jpg?1" class="img-thumbnail" alt='...' style={{ "minHeight": "300px" }} />
                </div>
                <div class="col-sm-4">
                    <img data-aos="zoom-in" data-aos-duration="1500" src="https://static.wixstatic.com/media/55586e_6facd4b0a64e4ef287887609b4c5e275~mv2.jpg/v1/fill/w_570,h_320,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/55586e_6facd4b0a64e4ef287887609b4c5e275~mv2.jpg" alt='...' class="img-thumbnail" style={{ "minHeight": "300px" }} />
                </div>
                <div class="col-sm-4">
                    <img data-aos="zoom-in-up" data-aos-duration="2000" src="https://my-online-shop.netlify.app/static/banner-3-83f4b7aa13d6dc993c8d5258d07a9732.jpg" alt='...' class="img-thumbnail" style={{ "minHeight": "300px" }} />
                </div>
            </div>
            <OurProduct/>
            <BigSale/>
            <OurServices/>
        </div>

    );
};

export default Home;