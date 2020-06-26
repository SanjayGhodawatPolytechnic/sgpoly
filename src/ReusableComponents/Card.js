import React from 'react';

const Card = ({
  title='',
  description='',
  image=''
}) => {
    return (      
      <div class="card float-left w-100">
        <div class="row ">    
          <div class="col-sm-7">
            <div class="card-block">
              <h3 class="card-title">{title}</h3>              
              <p>{description}</p>              
            </div>
          </div>
    
          <div class="col-sm-5">
            <img class="d-block w-100" src={image} alt="" />
          </div>
        </div>
      </div>
    );
}

export default Card;
