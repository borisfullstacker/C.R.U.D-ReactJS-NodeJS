import React, { Component } from 'react';
import {Col, ButtonGroup, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class SignIn extends Component{
constructor(props){
    super(props)

    this.state={name:"",year:"", rating:"", id:"",selectedFile: null, loaded: 0}
    this.handleChange= this.handleChange.bind(this);




    this.send= this.send.bind(this);
    this.sendId= this.sendId.bind(this);
    this.sendIdToDelete= this.sendIdToDelete.bind(this)
    this.sendIdToSearch= this.sendIdToSearch.bind(this)
}


handleChange(event){
    this.setState({[event.target.name]:event.target.value})
}



    render(){
        return(

         <Form> 
           <FormGroup>
               <Label>name</Label>
             <Input value={this.state.name} onChange={this.handleChange} type="text" name="name" />
            </FormGroup>
            <FormGroup>
              <Label>Year</Label>
              <Input value={this.state.year} onChange={this.handleChange} type="text" name="year" />
            </FormGroup>
            <FormGroup>
              <Label>id</Label>
              <Input value={this.state.id} onChange={this.handleChange} type="text" name="id" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleSelect">Select</Label>
                <Input type="select" name="rating" id="exampleSelect" onChange={this.handleChange}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </Input>
            </FormGroup>
            <FormGroup>
          <Label for="exampleFile">File Upload</Label>
          <div> {Math.round(this.state.loaded,2) } %</div>
          <Input type="file" name="selectedFile" id="exampleFile" onChange={this.handleselectedFile}/>
          <FormText color="muted">
             Here you can upload a file, file will be saved in database.
          </FormText>
        </FormGroup>
        <ButtonGroup>

            <Button onClick={this.send} color="primary">Add</Button>
            <Button onClick={this.sendIdToSearch} color="primary">Search</Button>
            <Button onClick={this.sendId} color="primary">Update</Button>
            <Button onClick={this.sendIdToDelete} color="primary">Delete</Button>
    </ButtonGroup>

          </Form>
        )
    }


    send=()=>{
       this.props.addUser(this.state.name, this.state.year, this.state.rating,this.state.selectedFile)
    }

    sendId=()=>{
        this.props.updateById(this.state.id,this.state.name,this.state.year)
    }
    sendIdToDelete=()=>{
        this.props.deleteUserById(this.state.id)
    }
    sendIdToSearch=()=>{
        this.props.searchById(this.state.id)
    }
//-----------------Handler------------------------------/

    handleselectedFile = (event) => {
        this.setState({
          selectedFile: event.target.files[0],
          loaded: 0,
        })
  }
}


export default SignIn;