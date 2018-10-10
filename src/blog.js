import React, { Component } from 'react';
import { Menu,Card,Grid } from 'semantic-ui-react'
import './App.css';

class Blog extends Component {

  render(){

    let blog =
        {  posts: [

            {
              "title":"Neural Network Glossary",
              "date": "March 2018",
              "url": "https://medium.com/@alex.sambvani/neural-network-glossary-72e4f63d34db"
            },
            {
              "title":"A Framework for Quantifying Network Effects on Platforms",
              "date": "March 2018",
              "url": "https://medium.com/@alex.sambvani/a-framework-for-quantifying-network-effects-on-platforms-8468411a1b79"
            },
            {
              "title":"Foursquare > Yelp",
              "date": "October 2017",
              "url": "https://medium.com/@alex.sambvani/foursquare-yelp-b7b93533841a"
            },
            {
              "title":"Instagram: The Darling of Mobile Advertizing",
              "date": "October 2017",
              "url": "https://medium.com/@alex.sambvani/instagram-the-darling-of-mobile-advertising-5185c69f4f99"
            },
            {
              "title":"Why StubHub Keeps Winning",
              "date": "October 2017",
              "url": "https://medium.com/@alex.sambvani/why-stubhub-keeps-winning-e931905b2361"
            },{
              "title":"Square, Inc.: A Winning Playbook for Data & Analytics Monetization",
              "date": "May 2017",
              "url": "https://medium.com/@alex.sambvani/square-inc-a-winning-playbook-for-data-analytics-monetization-565aa3abf7e9"
            }
          ]
        }

      let posts = blog.posts.map((post,index)=>{
        return (
          <div>
            <li key={index} type="square" className="blog-bullet">[{post.date}] <a href={post.url} target="_blank">{post.title}</a></li>
            <br/>
          </div>
        )

      })

      let description = "Here is a collection of posts I've written on various topics including: tech strategy, network effects, and machine learning / AI."
      return(
        <Grid>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={12}>
            <Card centered={true} raised={true} fluid={true} white colored text>
             <Card.Content header="Blog Posts" className="blog-header"/>
             <Card.Content description={description} />
             <Card.Content >
               {posts}
           </Card.Content>
           </Card>
         </Grid.Column>
         <Grid.Column width={2}></Grid.Column>
        </Grid>
      )
  }

}

export default Blog;
