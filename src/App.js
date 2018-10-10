import React, { Component } from 'react';
import logo from './logo.svg';
import { Menu,Card,Grid } from 'semantic-ui-react'
import Blog from './blog'
import Intro from './intro'
import Footer from './footer'
import './App.css';

class App extends Component {

state = {
  activeItem: 'blog'
}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {


    const { activeItem } = this.state

    return (
      <div className="App">
        <Menu stackable className='menu' inverted={true}>
          <h1 className='title'>Alex Sambvani</h1>
        <Menu.Menu position='right' fixed='top'>
          <Menu.Item name='blog' active={activeItem === 'blog'} onClick={this.handleItemClick}>          Blog
          </Menu.Item>

          <Menu.Item name='projects' active= {activeItem === 'projects'}
            onClick={this.handleItemClick} >
            Projects
          </Menu.Item>
          <Menu.Item
            name='about'
            active={activeItem === 'about'}
            onClick={this.handleItemClick} >
            About
          </Menu.Item>
          <Menu.Item
            name='resources'
            active={activeItem === 'resources'}
            onClick={this.handleItemClick} >
            Resources
          </Menu.Item>
        </Menu.Menu>
        </Menu>
        <Intro/>
        <Blog/>
        <Footer/>
      </div>
    );
  }
}

export default App;
