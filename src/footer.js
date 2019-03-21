
import React, { Component } from 'react';
import { Menu, Card, Grid, Segment, Icon } from 'semantic-ui-react'
import './App.css';

class Footer extends Component {

  openFooterLink = (e)=>{
    if(e.target.id=='linkedIn'){
      window.open('https://www.linkedin.com/in/alexsambvani/',"_blank");
    } else if (e.target.id=='gitHub'){
      window.open('https://github.com/asambvani',"_blank");
    }
    else if (e.target.id=='twitter'){
      window.open('https://twitter.com/sambvani',"_blank");
    }
  }


  render(){
      return(
        <div>
          <br/>
          <br/>
          <Grid className='footer'>
            <Grid.Row color='black'>
              <Grid.Column>
                <Icon name='linkedin square' id='linkedIn' size='huge' link={true} onClick={this.openFooterLink}></Icon>
                <Icon name='github square' size='huge' id='gitHub' link={true} onClick={this.openFooterLink}></Icon>
                <Icon name='twitter square' size='huge' id='twitter' link={true} onClick={this.openFooterLink}></Icon>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row color='black'>
              <Grid.Column>
                © Alex Sambvani, 2018.
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      )
  }
}

export default Footer;
