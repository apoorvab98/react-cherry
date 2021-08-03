import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserServiceFetch from '../services/UserServiceFetch';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class UserComponent extends React.Component {

    constructor(props){

        super(props);

        this.state={
            users:[]
        }    

    }

    componentDidMount() {
        UserServiceFetch.getUsers()
          .then((res) => {
              this.setState({ users: res })
          });

      }

    // handleRegistrationSubmit(){

    //     //e.preventDefault();

    //     this.register(this.state);

    //     console.log(this.state)


    // }
    // register() {
    
    //     console.warn("Formdata", this.state)
    //     fetch('http://localhost:8081/user/register', {
    //       method: "POST",
    //       headers: { 'Content-Type': 'application/json' },
    //       body: JSON.stringify(this.state)
    //     }).then((resp) => {
    //       resp.json().then((result) => {
    //         console.warn(result)
        
        
        
    //     })   
    //       })
    
    
    
        
    
    //   }


    render() {
        return (
        <div>
            <div class="container">
            <h1 className ="text-center"> Users List</h1>
            <table  className="table table-striped">
                <thead>
                <tr>
                    <td> USER ID</td>
                    <td> EMAIL ID </td>
                    <td> USER NAME</td>
                </tr>   
                </thead>  
                <tbody>
                    {
                        this.state.users.map(
                            user =>
                            <tr key={user.id}>
                                <td> {user.id}</td>
                                <td> {user.email}</td>
                                <td> {user.name}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>  
            </div>            
        </div>

        );
    }
}