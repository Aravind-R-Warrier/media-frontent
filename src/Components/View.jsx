import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import { Row, Col } from 'react-bootstrap';
import { getAllVideoApi, getCatagoryApi, updateCatagoryApi } from '../Services/AllApis';

function View({uploadVideoResponse,setDropVideoResponse}) {
  // Corrected state initialization
  const [AllVideos, setAllVideos] = useState([]);
  const[deleteVideoresponse,SetdeleteVideoResponse]=useState(false)


  const getAllVideos = async () => {
    try {
      const result = await getAllVideoApi();
      // console.log(result);
      if (result.status === 200) {
        setAllVideos(result.data); // Fixed casing in setter function
      } else {
        console.log("API failed");
        setAllVideos([]);
      }
    } catch (error) {
      console.error("Error fetching videos:", error);
      setAllVideos([]);
    }
  };


  useEffect(() => {
    getAllVideos();
    SetdeleteVideoResponse(false)
  }, [uploadVideoResponse,deleteVideoresponse]);


  const dragOver=(e)=>{
    e.preventDefault()
  }

  const videoDropped=async(e)=>{
    const {videoId,catagoryId}=JSON.parse(e.dataTransfer.getData('data'))
    // console.log("Dropped data:", e.dataTransfer.getData("data"));
    // console.log(videoId)
    const {data}=await getCatagoryApi()
    const selectedCatagory=data.find(item=>item.id==catagoryId)
    console.log("All videos in selected category:", selectedCatagory.allVideos);
    let result=selectedCatagory.allVideos.filter(video=>(video.id) !== videoId)
    console.log(result)
    let {id,CatagoryName}=selectedCatagory
    let newCatagory={id,CatagoryName,allVideos:result}
    const res=await updateCatagoryApi(catagoryId,newCatagory)
    console.log(res)
    setDropVideoResponse(res)
  }

  return (
    <>
      <h4 className='text-center'>All Videos</h4>
      <Row  droppable="true"onDragOver={e => dragOver(e)}onDrop={e => videoDropped(e)}>
        {AllVideos.map((video,index) => (
          <Col key={index} sm={12} md={6} lg={4}>
            <VideoCard video={video} SetdeleteVideoResponse={SetdeleteVideoResponse}/> 
          </Col>
        ))}
      </Row>
    </>
  );
}

export default View;
