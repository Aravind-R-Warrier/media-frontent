import React from 'react'
import { Card } from 'react-bootstrap'
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { addHistoryApi, deleteAVideoApi } from '../Services/AllApis';


function VideoCard({video,insidecatagory,SetdeleteVideoResponse}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {setShow(true);

    const{caption,link}=video
    console.log(link,caption)

    // date time fixing
    let today=new Date()
    console.log(today)

    let timeStamp=new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
console.log(timeStamp)

    let videoHistory={caption,link,timeStamp}
    console.log(videoHistory)

    // api call
    await addHistoryApi(videoHistory)
  }

  const dragStarted=(e,id)=>{
    console.log(id)
    e.dataTransfer.setData("videoId",id)
  }

  const removeVideo=async(id)=>{
    await deleteAVideoApi(id)
    SetdeleteVideoResponse(true)
  }


  return (
    <>
          <Card style={{ width: '18rem',marginTop:"15px" }} draggable onDragStart={e=>dragStarted(e,video?.id)}>
      <Card.Img variant="top" width={"100%"} height={"250px"}  onClick={handleShow} src={video.url} />
      <Card.Body>
      <div className="d-flex justify-content-between">
      <Card.Title>{video.caption}</Card.Title>
      {insidecatagory?null:<button variant="primary" className='btn text-danger pb-2'onClick={()=>removeVideo(video?.id)}><i class="fa-solid fa-trash"></i></button>}
      </div>
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src={`${video.link}?autoplay=1`} title="YouTube video player" frameborder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
      </Modal>

    </>
  )
}

export default VideoCard
