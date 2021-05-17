import React, { Component } from "react";
import $, { jQuery } from "jquery";
import "./vidcarousel.css";

class Vidnewcarousel extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <div id="video-gallery" className="royalSlider videoGallery rsDefault">
          <a
            className="rsImg"
            data-rsw={843}
            data-rsh={473}
            data-rsvideo="http://www.youtube.com/watch?v=HFbHRWwyihE"
            href="https://dimsemenov.com/plugins/royal-slider/img/admin-video.png"
          >
            <div className="rsTmb">
              <h5>New RoyalSlider</h5>
              <span>by Dmitry Semenov</span>
            </div>
          </a>
          <a
            className="rsImg"
            data-rsvideo="https://vimeo.com/45830194"
            href="https://b.vimeocdn.com/ts/319/715/319715493_640.jpg"
          >
            <div className="rsTmb">
              <h5>Stanley Piano</h5>
              <span>by Digital Kitchen</span>
            </div>
          </a>
          <div className="rsContent">
            <a
              className="rsImg"
              data-rsvideo="https://vimeo.com/31240369"
              href="https://b.vimeocdn.com/ts/210/393/210393954_640.jpg"
            >
              <div className="rsTmb">
                <h5>I Believe I Can Fly</h5>
                <span>by sebastien montaz-rosset</span>
              </div>
            </a>
            <h3 className="rsABlock sampleBlock">
              Animated block, to show you that you can put anything you want
              inside each slide.
            </h3>
          </div>
          <a
            className="rsImg"
            data-rsvideo="https://vimeo.com/44878206"
            href="https://b.vimeocdn.com/ts/311/891/311891198_640.jpg"
          >
            <div className="rsTmb">
              <h5>Dubstep Dispute</h5>
              <span>by Fluxel Media</span>
            </div>
          </a>
          <a
            className="rsImg"
            data-rsvideo="https://vimeo.com/45778774"
            href="https://b.vimeocdn.com/ts/318/502/318502540_640.jpg"
          >
            <div className="rsTmb">
              <h5>The Epic &amp; The Beasts</h5>
              <span>by Sebastian Linda</span>
            </div>
          </a>
          <a
            className="rsImg"
            data-rsvideo="https://vimeo.com/41132461"
            href="https://b.vimeocdn.com/ts/284/709/284709146_640.jpg"
          >
            <div className="rsTmb">
              <h5>Barcode Band</h5>
              <span>by Kang woon Jin</span>
            </div>
          </a>
          <a
            className="rsImg"
            data-rsvideo="hhttps://vimeo.com/44388232"
            href="https://b.vimeocdn.com/ts/308/375/308375094_640.jpg"
          >
            <div className="rsTmb">
              <h5>Samm Hodges Reel</h5>
              <span>by Animal</span>
            </div>
          </a>
          <a
            className="rsImg"
            data-rsvideo="http://www.youtube.com/watch?v=VDspPKDMBMo"
            href="https://lowercolumbia.edu/_resources/plugins/royal-slider/templates/img/video/02.jpg"
          >
            <div className="rsTmb">
              <h5>The Foundry Showreel</h5>
              <span>by The Foundry</span>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Vidnewcarousel;
