import React from 'react';
import Main from '../../ReusableComponents/Main';


function Home() {
  return (
      <Main>
    <div>            
      <div className="container">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={require('../../img/1.jpg')} alt="First slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={require('../../img/2.jpg')} alt="Second slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={require('../../img/3.jpg')} alt="Third slide"/>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <br/>
        <br/>
        <br/>
        <h1>Top News </h1>
        <br/>
        <br/>

        <div className="row">
          
          <div className="card col-lg-3 col-md-6 col-sm-12 col-12" >
            <img src={"https://images.unsplash.com/photo-1592985791547-d64ed6e40189?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim alias perspiciatis labore quam rerum itaque iusto sint recusandae, eius consequatur.</p>
            </div>
          </div>

          <div className="card col-lg-3 col-md-6 col-sm-12 col-12" >
            <img src={"https://images.unsplash.com/photo-1592985791547-d64ed6e40189?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim alias perspiciatis labore quam rerum itaque iusto sint recusandae, eius consequatur.</p>
            </div>
          </div>

          
          <div className="card col-lg-3 col-md-6 col-sm-12 col-12" style={{width: '18rem'}}>
            <img src={"https://images.unsplash.com/photo-1592985791547-d64ed6e40189?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab ut reiciendis nostrum labore voluptas deserunt.</p>
            </div>
          </div>

          
          
          <div className="card col-lg-3 col-md-6 col-sm-12 col-12" style={{width: '18rem'}}>
            <img src={"https://images.unsplash.com/photo-1592985791547-d64ed6e40189?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur quibusdam maxime at voluptatem accusantium blanditiis!</p>
            </div>
          </div>
          

        </div>  
      </div>
    </div>
    </Main>
  );
}

export default Home;
