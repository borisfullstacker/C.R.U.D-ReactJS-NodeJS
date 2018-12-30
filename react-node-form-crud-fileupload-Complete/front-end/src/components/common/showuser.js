import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, CardImg, CardTitle, CardText,   CardSubtitle, CardBody } from 'reactstrap';



class ShowUser extends Component{
    constructor(props){
        super(props)
        // this.addUserToDb=this.addUserToDb.bind(this)
    }
    render(){
        return(
     <Card>
        <CardImg top width="100%" src={this.props.url} alt="Card image cap" />
        <CardBody>
          <CardTitle>Name: {this.props.name}</CardTitle>
          <CardSubtitle>Year: {this.props.year}</CardSubtitle>
          <CardSubtitle>rating: {this.props.rating}</CardSubtitle>
          <CardText>id: {this.props.id}</CardText>
          {/* <Button>Button</Button> */}
        </CardBody>
      </Card>     
         
        )
    }


}

export default ShowUser;