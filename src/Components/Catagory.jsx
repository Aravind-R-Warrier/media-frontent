import React, { useEffect, useState } from 'react';
import { Modal, Button, FloatingLabel, Col, Row, Form } from 'react-bootstrap';
import { addCatagoryApi, deleteCatagoryApi, getAVideoApi, getCatagoryApi, updateCatagoryApi } from '../Services/AllApis';
import VideoCard from './VideoCard';

function Catagory({ dropVideoResponse }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [CatagoryName, setCatagoryName] = useState('');
  const [allCatagories, setAllCatagories] = useState([]);

  const handleAdd = async () => {
    if (CatagoryName) {
      const result = await addCatagoryApi({ CatagoryName, allVideos: [] });
      if (result.status >= 200 && result.status < 300) {
        handleClose();
        setCatagoryName('');
        getCatogories();
      } else {
        alert("please fill missing fields");
      }
    }
  };

  const getCatogories = async () => {
    const { data } = await getCatagoryApi();
    setAllCatagories(data);
  };

  const removeCatagory = async (id) => {
    await deleteCatagoryApi(id);
    getCatogories();
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const videoDrop = async (e, catagoryId) => {
    const videoId = e.dataTransfer.getData("videoId");
    const { data } = await getAVideoApi(videoId);

    const selectedCatagory = allCatagories.find(item => item.id === catagoryId);
    selectedCatagory.allVideos.push(data);
    await updateCatagoryApi(catagoryId, selectedCatagory);
    getCatogories();
  };

  const videoDragStarted = (e, videoId,catagoryId) => {
    let dataShare={videoId,catagoryId}
    e.dataTransfer.setData('data', JSON.stringify(dataShare));
  };

  useEffect(() => {
    getCatogories();
    
  }, [{dropVideoResponse}]);

  return (
    <>
      <div className="d-grid">
        <button className="btn btn-danger" onClick={handleShow}>Add Category</button>
      </div>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Catagory Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingInput1" label="Video Id" className="mb-3">
            <Form.Control type="text" placeholder="Enter Movie Catogory" onChange={(e) => setCatagoryName(e.target.value)} />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="primary" onClick={handleAdd}>Add Catagory</Button>
        </Modal.Footer>
      </Modal>

      {/* Category display */}
      {allCatagories?.length > 0 ? allCatagories.map(catagory => (
        <div
          className="border border-3 m-3 p-3"
          droppable="true"
          onDragOver={e => dragOver(e)}
          onDrop={e => videoDrop(e, catagory?.id)}
          key={catagory.id}
        >
          <div className="d-flex justify-content-between align-items-center">
            <h5>{catagory?.CatagoryName}</h5>
            <button variant="primary" className="btn text-danger pb-2" onClick={() => removeCatagory(catagory?.id)}>
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
          <Row>
            {catagory?.allVideos.length > 0 ? catagory?.allVideos.map(video => (
              <Col sm={12} md={6} lg={4} key={video.id} className='mb-3 mt-2' draggable onDragStart={e => videoDragStarted(e,video.id,catagory.id)}>
                <VideoCard video={video} insidecatagory={true} />
              </Col>
            )) : null}
          </Row>
        </div>
      )) : <p className="text-danger text-center">No Category added</p>}
    </>
  );
}

export default Catagory;
