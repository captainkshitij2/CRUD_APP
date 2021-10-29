import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {Form,Button, Container} from "react-bootstrap"
import {useHistory,useParams,Link} from "react-router-dom"


export default function Update() {
    let history=useHistory();
    const{id}=useParams();
 
    const[details,setdetails]=useState({
        first_name:"",
        last_name:"",
        email:""
    }
    )
    const{first_name,last_name,email}=details
    const Handleme=(e)=>{
        setdetails({...details,[e.target.name]:e.target.value})}
        // console.log(details)
   
    const Loaduser= async ()=>{
            const result = await axios.get(`https://reqres.in/api/users/${id}`)
         setdetails(result.data.data)
        }
        useEffect(()=>{
            Loaduser()
        },[])
    const Handlesubmit=async(e) =>{
        e.preventDefault();
    await axios.put(`https://reqres.in/api/users/${id}`, details);
        history.push('/')

    }
    return (
        <Container>
           <Form onSubmit={Handlesubmit}>
            <Form.Label>Update Employee</Form.Label>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name="first_name" value={first_name} placeholder="Enter First Name" onChange={Handleme}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" name="last_name" value={last_name} placeholder="Enter Last Name" onChange={Handleme} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" name="email" value={email} placeholder="Enter email" onChange={Handleme} />
                </Form.Group>

                
             <Button variant="primary" type="submit" >
                    Submit
                </Button>
            </Form>

        </Container>
    )
}

