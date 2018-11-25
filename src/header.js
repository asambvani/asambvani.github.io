import React, { Component } from 'react';
import logo from './logo.svg';
import { Menu,Card,Grid } from 'semantic-ui-react'
import Blog from './blog'
import Intro from './intro'
import Footer from './footer'
import './App.css';
import {NavLink} from 'react-router-dom'
import {withRouter, Redirect} from 'react-router-dom'

class Header extends Component {

state = {
  activeItem: 'blog'
}

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    return(<div></div>)
  }

  render() {

    const { activeItem } = this.state

    let currentPath = this.props.location.pathname

    if(`/${activeItem}` != currentPath){
      return(<Redirect to={`/${activeItem}`}/>)
    }
    else{
      return (
          <Menu stackable className='menu' inverted={true}>
            <h1 className='title'>Alex Sambvani</h1>
            <Menu.Menu position='right' fixed='top'>
              <Menu.Item name='blog' active={activeItem === 'blog'} onClick={this.handleItemClick}>
              <NavLink to='/'>Blog</NavLink>
              </Menu.Item>
              <Menu.Item
                name='resources'
                active={activeItem === 'resources'}
                onClick={this.handleItemClick} >
                <NavLink to='/resources'> Resources </NavLink>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
      );
    }
  }
}

export default withRouter(Header);

// <Menu.Item name='projects' active= {activeItem === 'projects'}
//   onClick={this.handleItemClick} >
//   Projects
// </Menu.Item>
// <Menu.Item
//   name='about'
//   active={activeItem === 'about'}
//   onClick={this.handleItemClick} >
//   About
// </Menu.Item>
