import React from 'react';
import Main from '../../ReusableComponents/Main';
import './CSS/management.css'
import './CSS/board.css'

function managementBoard(){

    const images = [
        {
            original:'http://www.sgipolytechnic.in/pics/00.jpg',
            thumbnail:'http://www.sgipolytechnic.in/pics/00.jpg',
            description:'Mr. Danchand K. Ghodawat',
            designation:'Showers of Blessings'
        },
        {
            original:'http://www.sgipolytechnic.in/pics/01.jpg',
            thumbnail:'http://www.sgipolytechnic.in/pics/01.jpg',
            description:'Mr. Sanjay D. Ghodawat',
            designation:'Chairman'

        },
        {
            original:'http://www.sgipolytechnic.in/pics/04.jpg',
            thumbnail:'http://www.sgipolytechnic.in/pics/04.jpg',
            description:'Mrs. Neeta S. Ghodawat ',
            designation:"Vice Chairman"
        },
        {
            original:'http://www.sgipolytechnic.in/pics/03.jpg',
            thumbnail:'http://www.sgipolytechnic.in/pics/03.jpg',
            description:'Mr. Shrenik S. Ghodawat',
            designation:'Secretary'
        },
        {
            original:'http://www.sgipolytechnic.in/pics/06.jpg',
            thumbnail:'http://www.sgipolytechnic.in/pics/06.jpg',
            description:'Mr. Vinod D. Ghodawat',
            designation:'Trustee'
        },
        {
            original:'http://www.sgipolytechnic.in/pics/07.jpg',
            thumbnail:'http://www.sgipolytechnic.in/pics/07.jpg',
            description:'Mr. Anil B. Kotecha',
            designation:'Trustee'
        },
        {
            original:'http://www.sgipolytechnic.in/pics/08.jpg',
            thumbnail:'http://www.sgipolytechnic.in/pics/08.jpg',
            description:'Mr. Atul M. Shinde',
            designation:'Trustee'
        },
        {
            original:'http://www.sgipolytechnic.in/pics/09.jpg',
            thumbnail:'http://www.sgipolytechnic.in/pics/09.jpg',
            description:'Mr. Vinayak V. Bhosale',
            designation:'Trustee'
        },
        {
            original:'http://www.sgipolytechnic.in/pics/05.jpg',
            thumbnail:'http://www.sgipolytechnic.in/pics/05.jpg',
            description:'Mr. Rajesh Ghodawat',
            designation:'Trustee'
        },
    ]


    const ProfileCard = ({
        image = "",
        name = "",
        designation = "",
    }) => (
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="our-team rounded border">
                    <div class="picture">
                    <img class="img-fluid" src={image} alt="boards" />
                    </div>
                    <div class="team-content">
                    <h3 class="name">{name}</h3>
                    <h4 class="title">{designation}</h4>
                    </div>
                    
                </div>
                </div>
    )

    return(
        <Main isSlideShow={true}>
            <div>            
                <div className="row">                                                            
                    {images.map((d,i) => (
                        <ProfileCard image={d.original} name={d.description} designation={d.designation} />
                    ))}
                </div>
            </div>                                
        </Main>
    )
}


export default managementBoard;