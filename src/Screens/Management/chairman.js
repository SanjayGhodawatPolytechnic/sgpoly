import React from 'react';
import Main from '../../ReusableComponents/Main';
import './CSS/management.css'

function managementChairman(){
    return(
        <Main isSlideShow={true}>
            <div>
            <br/>
            <br/>
            <div class="card card-cascade narrower">

  <div class="view view-cascade overlay">
    <img class="card-img-top  size-setting" src="http://www.sgipolytechnic.in/pics/Chairman2.jpg"
      alt="Card image cap"/>
    <a>
      <div class="mask rgba-white-slight"></div>
    </a>
  </div>

  <div class="card-body card-body-cascade">

    <h5 class="pink-text pb-2 pt-1"><i class="fas fa-user-alt"></i> Chairman</h5>
    <h3 class="font-weight-bold card-title">Sanjay Ghodawat</h3>
    <p class="card-text">Welcome to the Sanjay Ghodawat Group of Institutions! Education is making students aware of the infinite potential within and bringing it up so that the result is transformation of personalities. Education should bring students out of their comfort zone and challenge them to reach out for their best of abilities. In the era of the 21st Century, where we deal with knowledge workers and have students who are flooded with information from all sides, the role of teacher becomes all the more vital. Teachers in this era have to be by the side of the students help them distinguish between the right and wrong knowledge, motivate them to find their potential, find themselves as they grapple with challenges and connect them with their inner conscience so that they adhere to the right values and principles and emerge not just as success in the world but significant beings who have touched lives around and made the world a better place <br/><br/>
    At Sanjay Ghodawat Group of Institutions, you will find the right environment, the right facilities, the right academics, teachers and experts who will engage your ward into constructive learning activities that will bring out and nurture the leaders in him/her. Our motto says, 'Conquer the world with SGI', we are committed to give the very best of all essentials in the field of academics so that we see the motto coming true in the lives of our students and we rest in the assurance that somewhere some soul has breathed better because of Sanjay Ghodawat Group of Institutions.</p>
    <a class="btn btn-lg "><i class="fas fa-award"></i></a>

  </div>

</div>

            <br/>
            <br/>
            </div>
        
        </Main>
    )
}


export default managementChairman;