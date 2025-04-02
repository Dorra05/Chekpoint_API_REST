import React from "react"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function Filter({setTitle, setRating}) {
 
    return (
      <>
       <InputGroup className="mb-3"style={{marginTop:'70px'}} >
       <InputGroup.Text id="inputGroup-sizing-default" style={{color:'cadetblue'}} >
         Movie Title
        </InputGroup.Text>
        <Form.Control 
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"onChange={(e)=>setTitle(e.target.value)}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default"style={{color:'cadetblue'}} >
      Movie Rating
        </InputGroup.Text>
        <Form.Control
          aria-label="Default" 
           aria-describedby="inputGroup-sizing-default"onChange={(e)=>setRating(e.target.value)}  />,
        
      </InputGroup>
      </>
    );
  }







export default Filter