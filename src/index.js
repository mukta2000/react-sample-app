import React from 'react';
import ReactDOM from 'react-dom';
import Heading from './Heading';
import App from './App.css';

const imgstyle={
  width:"200px",
  height:"200px",
  margin:"30px"
}
ReactDOM.render(
  <div>
  <Heading/>
  <h3>Images Section.Click on the fourth image to visit the official website</h3>
  <img src="https://m.hindustantimes.com/rf/image_size_1200x900/HT/p2/2020/07/06/Pictures/covid19-intense-lockdown-in-chennai_cba5478a-bf34-11ea-9738-294dc8afd766.jpg" style={imgstyle}></img>
  <img src="https://lp-cms-production.imgix.net/2019-06/9483508eeee2b78a7356a15ed9c337a1-bengaluru-bangalore.jpg" style={imgstyle}></img>
  <img src="https://www.india-briefing.com/news/wp-content/uploads/2013/11/Kolkata-City-Profile.jpg" style={imgstyle}></img>
  <a href="https://hackclub.com/"><img src="https://assets.hackclub.com/icon-square.png" style={imgstyle}></img></a>
  <h3>Video Section.Click on the video </h3>
  <iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/W0DM5lcj6mw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  ,
  document.getElementById('root')
);


