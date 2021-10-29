import axios from 'axios'
import React,{useState} from 'react'
import {Form,Button, Container} from "react-bootstrap"
import {useHistory} from "react-router-dom"



function Newemp(props) {
    let history = useHistory();
    const[details,setdetails]=useState({
        fname:"",
        lname:"",
        email:""
    }
    )
    const{fname,lname,email}=details
    const Handleme=e=>{
        setdetails({...details,[e.target.name]:e.target.value})}
        // console.log(details)
    const Handledo=async e=>{
        e.preventDefault();
     await axios.post(`https://reqres.in/api/users/`,details)
        history.push('/')
    }
    return (
        <Container>
            <Form onSubmit={Handledo}>
            <Form.Label style={{fontSize:"40px",fontWeight:"500"}}>New Employee</Form.Label>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control value={fname} name="fname" onChange={Handleme} type="text" placeholder="Enter First Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control value={lname} name="lname" onChange={Handleme} type="text" placeholder="Enter Last Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control value={email} name="email" onChange={Handleme} type="text" placeholder="Enter email" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                
                {/* <Link to="/"><Button variant="primary" type="submit">
                    Submit
                </Button></Link> */}
            </Form>

        </Container>
    )
}

export default Newemp
