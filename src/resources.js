import React, { Component } from 'react';
import { Menu,Card,Grid } from 'semantic-ui-react'
import './App.css';

class Resources extends Component {

  state = {
    data: {}
  }


  componentDidMount(){
      const APILink  = "https://sheets.googleapis.com/v4/spreadsheets/1RSzNQiPhToJKok5PA2qR6kpbSu2qbgXH-8Mwg5_-lsY/values:batchGet?ranges=Resources&majorDimension=ROWS&key=AIzaSyB4_EXNg80GMYCJpKiBqXCPNMIgA-6CxwM"
      let resources = {}

      fetch(APILink)
      .then(response => response.json())
      .then(data => {
        let results = data.valueRanges[0].values.slice(1)
        results.forEach(result=>{

            if ((result[0] in resources) == false){resources[result[0]] = []}
            resources[result[0]].push({'title':result[1], 'link':result[2], 'description':result[3]})

        })
        this.setState({data: resources})
      }).
      catch(error => {
        console.log(error)
      })
  }

  render(){

    let resources = Object.keys(this.state.data).map((category, index)=>{
      let items = this.state.data[category].map((item, index) => {
        return(
          <div>
            <li key={index+100} type="square" className="blog-bullet"><a href={item.link} target="_blank">{item.title}</a> {item.description}</li>
            <br/>
          </div>
        )
      })
      return(
        <Card key={index} centered={true} raised={true} fluid={true} white colored text>
         <Card.Content header={category} className="blog-header"/>
         <Card.Content >
           {items}
         </Card.Content>
        </Card>
      )
    })

      return(
        <Grid>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={12}>
            {resources}
          </Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid>
      )
  }

}

export default Resources;
