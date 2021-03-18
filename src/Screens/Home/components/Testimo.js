import React from "react";

import "./Testimo.css";

const Testimo = () => {
  return (
    <div className="container mt-4">
        <div className="training-title">
            <h4 className="aoe-title">Testimonials</h4>
            <div className="line" />
        </div>
        <div id="demo" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="carousel-caption">
                <p>If Shai Reznik's TDD videos don't convince you to add automated testing your code, I don't know what will.This was the very best explanation of frameworks for brginners that I've ever seen. </p> <img src="https://i.imgur.com/lE89Aey.jpg" />
                <div id="image-caption">Nick Doe</div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-caption">
                <p>If Shai Reznik's TDD videos don't convince you to add automated testing your code, I don't know what will.This was the very best explanation of frameworks for brginners that I've ever seen.</p> <img src="https://i.imgur.com/QptVdsp.jpg" className="img-fluid" />
                <div id="image-caption">Cromption Greves</div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-caption">
                <p>If Shai Reznik's TDD videos don't convince you to add automated testing your code, I don't know what will.This was the very best explanation of frameworks for brginners that I've ever seen.</p> <img src="https://i.imgur.com/jQWThIn.jpg" className="img-fluid" />
                <div id="image-caption">Harry Mon</div>
              </div>
            </div>
          </div> <a className="carousel-control-prev" href="#demo" data-slide="prev"> <i className="fas fa-arrow-left i" /> </a> <a className="carousel-control-next" href="#demo" data-slide="next"> <i className="fas fa-arrow-right i" /> </a>
        </div>
      </div>
  );
};

export default Testimo;

    // <div>
    //   <section className="testimonials-section">
    //     <div className="container">
    //       <div className="row">
    //         <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 testimonials">
    //           <div className="training-title">
    //             <h4 className="aoe-title">Testimonials</h4>
    //             <div className="line" />
    //           </div>
    //           <div className="col-center m-auto">
    //             <div
    //               id="myCarousel"
    //               className="carousel slide"
    //               data-ride="carousel"
    //             >
    //               {/* Wrapper for carousel items */}
    //               <div className="carousel-inner">
    //                 <div className="item carousel-item active">
    //                   <div className="img-box">
    //                     <img
    //                       src="https://www.eharmony.com/dating-advice/wp-content/uploads/images/goodsmile.jpg"
    //                       alt=""
    //                     />
    //                   </div>
    //                   <h4 className="carousel-title">Amazing Trainer!</h4>
    //                   <div className="carousel-line" />
    //                   <p className="testimonial">
    //                     <span>"</span> Lorem ipsum dolor sit amet, consectetur
    //                     adipiscing elit. Nam eu sem tempor, varius quam at,
    //                     luctus dui. Mauris magna metus, dapibus nec turpis vel,
    //                     semper malesuada ante. aliquet.
    //                   </p>
    //                   <p className="overview">
    //                     <b>- Paula Wilson</b>
    //                   </p>
    //                   <h6 className="company-name">Nations Trust Bank</h6>
    //                 </div>
    //                 <div className="item carousel-item">
    //                   <div className="img-box">
    //                     <img
    //                       src="https://www.eharmony.com/dating-advice/wp-content/uploads/images/goodsmile.jpg"
    //                       alt=""
    //                     />
    //                   </div>
    //                   <h4 className="carousel-title">Amazing Trainer!</h4>
    //                   <div className="carousel-line" />
    //                   <p className="testimonial">
    //                     <span>"</span> Vestibulum quis quam ut magna consequat
    //                     faucibus. Pellentesque eget nisi a mi suscipit
    //                     tincidunt. Utmtc tempus dictum risus. Pellentesque
    //                     viverra sagittis quam at mattis. facilisis gravida odio.
    //                   </p>
    //                   <p className="overview">
    //                     <b>- Antonio Moreno</b>
    //                   </p>
    //                   <h6 className="company-name">Nations Trust Bank</h6>
    //                 </div>
    //                 <div className="item carousel-item">
    //                   <div className="img-box">
    //                     <img
    //                       src="https://www.eharmony.com/dating-advice/wp-content/uploads/images/goodsmile.jpg"
    //                       alt=""
    //                     />
    //                   </div>
    //                   <h4 className="carousel-title">Amazing Trainer!</h4>
    //                   <div className="carousel-line" />
    //                   <p className="testimonial">
    //                     <span>"</span> Phasellus vitae suscipit justo. Mauris
    //                     pharetra feugiat ante id lacinia. Etiam faucibus mauris
    //                     id tempor egestas. Duis luctus turpis at accumsan
    //                     tincidunt. Phasellus.{" "}
    //                   </p>
    //                   <p className="overview">
    //                     <b>- Michael Holz</b>
    //                   </p>
    //                   <h6 className="company-name">Nations Trust Bank</h6>
    //                 </div>
    //               </div>
    //               {/* Carousel controls */}
    //               <a
    //                 className="carousel-control left carousel-control-prev"
    //                 href="#myCarousel"
    //                 data-slide="prev"
    //               >
    //                 <span>Prev</span>
    //                 <i className="fa fa-angle-left" />
    //               </a>
    //               <a
    //                 className="carousel-control right carousel-control-next"
    //                 href="#myCarousel"
    //                 data-slide="next"
    //               >
    //                 <span>Next</span>
    //                 <i className="fa fa-angle-right" />
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>