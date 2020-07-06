import React from "react";

import Main from "../../ReusableComponents/Main";

const hostel = () => {
    const Items = [
        {
            image: "http://www.sgipolytechnic.in/Infrastructure/hostel1.jpg",
        },
        {
            image: "http://www.sgipolytechnic.in/Infrastructure/hostel2.jpg",
        },
        {
            image: "http://www.sgipolytechnic.in/Infrastructure/hostel3.jpg",
        },
        {
            image: "http://www.sgipolytechnic.in/Infrastructure/hostel4.jpg",
        },
        {
            image: "http://www.sgipolytechnic.in/Infrastructure/hostel5.jpg",
        },
        {
            image: "http://www.sgipolytechnic.in/Infrastructure/hostel6.jpg",
        },
        

    ];

    return (
        <Main>
            <div className="main">
                <div class="grid-container">
                    {Items.map((d, i) => (
                        <div>
                            <img class={`grid-item grid-item-${i}`} src={d.image} />
                        </div>
                    ))}
                </div>
                <br/><br/><br/>
                <h5>HOSTEL FEE STRUCTURE</h5>
                            <br/><br/>
                <table class="table  table-borderless  ">

                    <tbody>
                        <tr>
                            <th>Hostel Fees</th>
                            <td>Rs. 34000</td>
                        </tr>
                        <tr>
                            <th>Hostel Deposite</th>
                            <td>Rs. 2000</td>
                        </tr>
                        <tr>
                            <th><h5>Total Fee</h5></th>
                            <td><h5>Rs. 36000</h5></td>
                        </tr>
                       
                        


                    </tbody>
                </table>
                
            </div>
        </Main>
    );
};

export default hostel;
