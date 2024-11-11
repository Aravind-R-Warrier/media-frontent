import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { UploadVideoApi } from '../Services/AllApis';

function Add({setVideoResponse}) {
  const [show, setShow] = useState(false);
  const [uploadVideo, setUploadVideo] = useState({
    id: "", caption: "", url: "", link: ""
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getYoutubeLink = (e) => {
    const { value } = e.target;

    if (value.includes("v=")) {
      const VID = value.split("v=")[1].slice(0, 11);
      setUploadVideo(prev => ({ ...prev, link: `https://www.youtube.com/embed/${VID}` }));
    } else {
      setUploadVideo(prev => ({ ...prev, link: "" }));
    }
  };

  const handleAdd = async () => {
    const { id, caption, url, link } = uploadVideo;
    if (!id || !caption || !url || !link) {
      alert("Please fill in all the fields");
    } else {
      try {
        const result = await UploadVideoApi(uploadVideo);
        console.log(result);
        if (result.status >= 200 && result.status < 300) {
          alert("Video uploaded successfully");
          handleClose();
          setVideoResponse(result.data)
        } else {
          alert(result.message || "Failed to upload video");
        }
      } catch (error) {
        console.error("Error uploading video:", error);
        alert("An error occurred while uploading the video.");
      }
    }
  };

  return (
    <>
      <div className='d-flex'>
        <h2 style={{ color: "white" }}>Upload Videos</h2>
        <button className='btn' onClick={handleShow}>
          <i className="fa-solid fa-upload fa-beat fs-3"></i>
        </button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Movie Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput1"
            label="Video Id"
            className="mb-3"
          >
            <Form.Control 
              type="text" 
              placeholder="Enter Movie Id" 
              onChange={(e) => setUploadVideo(prev => ({ ...prev, id: e.target.value }))} 
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput2" label="Video Title" className='mb-3'>
            <Form.Control 
              type="text" 
              placeholder="Enter Video Title" 
              onChange={(e) => setUploadVideo(prev => ({ ...prev, caption: e.target.value }))} 
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput3" label="Image URL" className='mb-3'>
            <Form.Control 
              type="text" 
              placeholder="Enter Image URL" 
              onChange={(e) => setUploadVideo(prev => ({ ...prev, url: e.target.value }))} 
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput4" label="Video URL" className='mb-3'>
            <Form.Control 
              type="text" 
              placeholder="Enter YouTube Video URL" 
              onChange={getYoutubeLink} 
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;
