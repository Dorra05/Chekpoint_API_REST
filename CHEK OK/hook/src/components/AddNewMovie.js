import React, { useState } from "react";
import Modal from 'react-modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function AddNewMovie({addingMovie}){
    
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: '50%',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      Modal.setAppElement('#root');
      let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [title, setTitle]=useState("")
  const [description, setDescription]=useState("")
  const [posterUrl, setPosterUrl]=useState("")

  const [rating, setRating]=useState(0)


  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
    
  }
  const addingTheMovie=(e)=>{
    const newMovie={title,description,posterUrl,rating}
    addingMovie(newMovie)
    setTitle("")
    setDescription("")
      setPosterUrl("")
      setRating(0)
      closeModal()
    
  }
  return(
    <div>
      <button onClick={openModal} style={{color:'blue'}}><strong>Add new Movie</strong></button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)} style={{color:'deeppink'}}>Hello Everybody</h2>
       
       
     
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter the title" 
        value={title}
        onChange={(e)=>setTitle(e.target.value)}/>
       

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter the description" 
        value={description}
        onChange={(e)=>setDescription(e.target.value)}/>
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>PosterURL</Form.Label>
        <Form.Control type="text" placeholder="Enter the posterUrl" 
        
        value={posterUrl}
        onChange={(e)=>setPosterUrl(e.target.value)}/>
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Rating</Form.Label>
        <Form.Control type="number" placeholder="Enter the rating" 
        
        value={rating}
        onChange={(e)=>setRating(e.target.value)}/>
       
      </Form.Group>
      <Button variant="success" type="submit" onClick={(e)=>{e.preventDefault();addingTheMovie(e)}}>
        Submit
      </Button>
      <Button  variant="danger"onClick={closeModal}>close</Button>
      
     
      </Modal>
    </div>
   
);

   
  


}
export default AddNewMovie