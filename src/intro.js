import React, { Component } from 'react';
import {Grid, Image} from 'semantic-ui-react'
import myImage from './img/Alex-photo.png'
import './App.css';

class Intro extends Component {

  render(){
    const introText = "My name is Alex Sambvani. I'm a Stanford Engineering graduate with professional experience in private equity investing and data science. I've also got a MBA from Harvard Business School. I'm currently working as a data scientist at Spotify, utilizing the world's biggest music data set to help make smart business decisions and build great products. Thanks for checking out my website!"

      return(
        <Grid>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={3}>
            <Image src={myImage} circular size='small'/>
          </Grid.Column>
          <Grid.Column textAlign='left' width={9}>
            <h1>Hi,</h1>
            <p>{introText}</p>
          </Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid>
      )
  }
}

export default Intro;
