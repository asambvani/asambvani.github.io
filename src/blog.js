import React, { Component } from 'react';
import { Menu,Card,Grid } from 'semantic-ui-react'
import Intro from './intro'
import './App.css';

class Blog extends Component {

  state = {
    blogData:[]
  }


  componentDidMount(){
      const APILink  = "https://sheets.googleapis.com/v4/spreadsheets/1RSzNQiPhToJKok5PA2qR6kpbSu2qbgXH-8Mwg5_-lsY/values:batchGet?ranges=blog&majorDimension=ROWS&key=AIzaSyB4_EXNg80GMYCJpKiBqXCPNMIgA-6CxwM"

      fetch(APILink)
      .then(response => response.json())
      .then(data => {
        let results = data.valueRanges[0].values.slice(1)
        this.setState({blogData: results})
      })
      .catch(error => {
        console.log(error)
      })
  }

  render(){

      let posts = this.state.blogData.map((post,index)=>{
        return (
          <div>
            <li key={index} type="square" className="blog-bullet">[{post[0]}] <a href={post[2]} target="_blank">{post[1]}</a></li>
            <br/>
          </div>
        )

      })

      let description = "Here is a collection of posts I've written on various topics including: tech strategy, network effects, and machine learning / AI."
      return(
        <div>
          <Intro/>
          <Grid>
            <Grid.Column width={2}></Grid.Column>
            <Grid.Column width={12}>
              <Card centered={true} raised={true} fluid={true} white colored text>
               <Card.Content header="Blog Posts" className="blog-header"/>
               <Card.Content description = {description} />
               <Card.Content >
                 {posts}
             </Card.Content>
             </Card>
           </Grid.Column>
           <Grid.Column width={2}></Grid.Column>
          </Grid>
        </div>
      )
  }

}

export default Blog;
