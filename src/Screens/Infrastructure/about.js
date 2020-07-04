import React from 'react';
import Main from '../../ReusableComponents/Main';
const infrastructureAbout = () => {
    return (
        <Main isSlideShow={true}>
            <div>            
            <br/>
            <br/>
            <div class="card mb-3 border border-dark rounded">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                    <br/>
            <img src="http://www.sgipolytechnic.in/Pics/institute_building.jpg" class="card-img-top border rounded trust-image" alt="..." />
            </div>
            </div>
            <div class="card-body">
            <br/><br/><br/>
                <li>Classification of Land - Category -RURAL</li>
                <li>Letter Issued by - Gram Vikas Adhikari - A/P. Atigre Taluka - Hatkanangale Sarpanch A/P. Atigre Taluka - Hatkanangale</li>
                <li>Land Use Certificate Issued by - Tahsildar - Taluka : Hatkanangale</li>
                <li>Details of Building Plan Approved by- Gram Vikas Adhikari - A/P. Atigre, Taluka - Hatkanangale, Sarpanch A/P. Atigre Taluka - Hatkanangale</li>
                <br/><br/><br/>
                <h5>Campus Facilities</h5> 
                   <br/><br/><br/>
                   
                   <table class="table table-borderless .table-sm ">
    
                <tbody>
                <tr>
                    <th><li>Bank ATM</li></th>
                    <th><li>Power backup</li></th>
                    <th><li>Food Court</li></th>
                </tr>
                <tr>
                    <th><li>Swimming Pool</li></th>
                    <th><li>Playing Ground</li></th>
                    <th><li>Tennis Court</li></th>
                </tr>
                <tr>
                    <th><li>Parking space</li></th>
                    <th><li>Medical Center</li></th>
                    <th><li>Transport facility</li></th>
                </tr>
                <tr>
                    <th><li>Seminar Hall</li></th>
                    <th><li>Conference Hall</li></th>
                    <th><li>Auditorium</li></th>
                </tr>
                <tr>
                    <th><li>Gymnasium</li></th>
                    <th><li>Common room for boys</li></th>
                    <th><li>Common room for girls</li></th>
                </tr>
                <tr>
                    <th><li>Information Access center</li></th>
                    <th><li>Video Conference room</li></th>
                </tr>
                
                

                
                </tbody>
            </table>
            </div>
            </div>
            </div>             
        </Main>
    );
}

export default infrastructureAbout;