import React from 'react';
import '../styles/MyOrder.css';

const MyOrder = () => {
    return (
        <div className='container'>
            <div class="row text-center">
    <div class="col-sm-12 fs-2 pb-3 pt-3">
        CURRENT <b class="text-mycolor">ORDER</b>
    </div>
</div>
<div class="row border border-2 p-3 mb-2 m-2" data-aos="zoom-in" data-aos-duration="1000">
    <div class="col-sm-4">
        <img src="https://dappered.com/wp-content/uploads/2020/07/bonobos-daily-grind-suit-trio-72420.jpg" style={{"maxHeight":"250px"}} alt='...' class="img-thumbnail rounded-start" />
    </div>
    <div class="col-sm-8">
        <div class="card-body">
            <div class="card-title  fs-6">
                <span class="bg-scolor p-1 border border-1 rounded-2">ORDER DATE: Sept. 30,2022</span>
            </div>
            <div class="card-text">
                <b>PRODUCT NAME:</b> Kids shirt<br/>
                <b>TOTAL PRICE:</b> 399/-<br/>
                <b>COLOR:</b> multi-color<br/><br/>
                <b>SIZE:</b> <span class="bg-scolor p-1 px-3 border border-1 rounded-2">S</span><br/>
                <b>REMARK:</b> Pending for Admin<br/>
                <span class="btn btn-danger">CANCEL ORDER </span>

            </div>


        </div>
    </div>
</div>
<div class="row border border-3 p-3 mb-2 m-2" data-aos="zoom-in" data-aos-duration="1000">
    <div class="col-sm-4">
        <img src="https://m.media-amazon.com/images/I/61L6qJBbiYL._AC_UX575_.jpg" style={{"maxHeight":"250px"}} alt='...' class="img-thumbnail rounded-start" />
    </div>
    <div class="col-sm-8">
        <div class="card-body">
            <div class="card-title  fs-6">
                <span class="bg-scolor p-1 border border-1 rounded-2">ORDER DATE: Sept. 30,2022</span>
            </div>
            <div class="card-text">
                <b>PRODUCT NAME:</b> Kids shirt<br/>
                <b>TOTAL PRICE:</b> 399/-<br/>
                <b>COLOR:</b> multi-color<br/><br/>
                <b>SIZE:</b> <span class="bg-scolor p-1 px-3 border border-1 rounded-2">S</span><br/>
                <b>REMARK:</b> Pending for Admin<br/>
                <span class="btn btn-danger">CANCEL ORDER </span>

            </div>


        </div>
    </div>
</div>
<div class="row border border-3 p-3 m-2" data-aos="zoom-in" data-aos-duration="1000">
    <div class="col-sm-4">
        <img src="https://s3.ap-south-1.amazonaws.com/tcsonline-live/catalog/category/land-boys_2.jpg" style={{"maxHeight":"250px"}} alt='...' class="img-thumbnail rounded-start" />
    </div>
    <div class="col-sm-8">
        <div class="card-body">
            <div class="card-title  fs-6">
                <span class="bg-scolor p-1 border border-1 rounded-2">ORDER DATE: Sept. 30,2022</span>
            </div>
            <div class="card-text">
                <b>PRODUCT NAME:</b> Kids shirt<br/>
                <b>TOTAL PRICE:</b> 399/-<br/>
                <b>COLOR:</b> multi-color<br/><br/>
                <b>SIZE:</b> <span class="bg-scolor p-1 px-3 border border-1 rounded-2">S</span><br/>
                <b>REMARK:</b> Pending for Admin<br/>
                <span class="btn btn-danger">CANCEL ORDER </span>

            </div>


        </div>
    </div>
</div>
        </div>
    );
};

export default MyOrder;