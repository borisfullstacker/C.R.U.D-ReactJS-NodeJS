import React, {Component} from 'react';
import ShowUser from './showuser';
import SignIn from './signin';
import {Col, Row, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




class Main extends Component{
    constructor(props){
        super(props)
        this.state={info:[]}
    }

    render(){
        return(
            <div>
                <Container>
                <Row>
                 <Col sm="6"> 
                      <SignIn searchById={this.searchById} deleteUserById={this.deleteById} updateById={this.updateById} addUser={this.addUser} />
                  </Col> 
                  <Col sm="6"> 
                     {this.state.info.map(arr=><ShowUser url={arr.url} id={arr.id} name={arr.name} year={arr.year} rating={arr.rating}/>)}
                  </Col> 
                </Row>
                </Container>
            </div>
        )
    }

//-------------------------------------comunications-------------------------------
addUser=(name,year,rating,file)=>{
    let info={name:name,year:year,rating:rating}
         console.log(file);
    let data = new FormData();
        data.append('image', file);

        for (var key in info){
            data.append(key,info[key]);
        }
        
        // logs all enteries
        // for (var pair of data.entries()) {
        //     console.log(pair[0]+ ', ' + pair[1]); 
        // }

    this.addUserToTable(data)
}

updateById=(id,name,year)=>{
    this.updateUser(id,name,year)
}
deleteById=(id)=>{
    this.deleteUser(id)
}

searchById=(id)=>{
    this.getOneUser(id)
}




//-------------------------------------------------------------------------
componentDidMount(){
    this.getAllUsers();
}

addUserToTable(data) {
    fetch(`http://localhost:3000/`, {
      method: 'POST',
      body: data
    }).then(() => {
      this.getAllUsers();
    }).catch((err)=>console.log(err));
}


updateUser(id,name,year) {
    let info={
        id:id,
        name:name,
        year:year,
    }
    fetch(`http://localhost:3000/`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },body: JSON.stringify(info)
    }).then(()=> {
      this.getAllUsers();
    }).catch((err)=>console.log(err));
}

deleteUser(id) {
    fetch(`http://localhost:3000/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(()=> {
      this.getAllUsers();
    }).catch((err)=>console.log(err));
}

getOneUser(id){
    fetch(`http://localhost:3000/${id}`, {
        method: 'GET'}).then(response=>response.json()).then((data)=>
        { 
          this.setState({info:data}); 
          console.log(this.state);
        });
    }

getAllUsers(){
    fetch(`http://localhost:3000/`, {
        method: 'GET'}).then(response=>response.json()).then((data)=>
        { 
          let myState = Object.assign({}, this.state);    //creating copy of object
          myState.info = data; 
          this.setState(myState); 
          console.log(this.state);
        });
    }
}

export default Main;