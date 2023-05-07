import React from 'react';

const Profile = () => {
    return (
        <div className='container'>

            <div class="row bg-light">
                <b class="fs-2 text-dark text-center text-mycolor text-align:justify;">MY <span className='text-mycolor'>PROFILE</span></b>

                <div class="row border border-3 p-3">
                    <div class="col-sm-4">
                        <img src="https://www.kosha.co/journal/wp-content/uploads/2022/07/man-wearing-a-muffler.jpg" style={{ "max-height": "250px" }} alt='...' class="img-thumbnail rounded-start" />
                    </div>
                    <div class="col-sm-8 mt-5">
                        <div class="card-body">
                            <div class="card-title  fs-6">
                                <span class="bg-warning p-1 border border-1 rounded-2">PROFILE: Sept. 30,2022</span>
                            </div><br />
                            <div class="card-text">
                                <b>NAME:</b> Manish Kumar<br />
                                <b>MOBILE:</b> 6307899113<br />
                                <b>EMAIL:</b>manish20020328@gmail.com<br />
                                <b>ADDRESS:</b>Madhawapur Mihinpurwa baharaich uttar pardesh 226022

                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Profile;