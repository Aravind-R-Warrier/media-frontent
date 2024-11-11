import React, { useState } from 'react'
import Add from '../Components/Add'
import View from '../Components/View'
import Catagory from '../Components/Catagory'
import { Link } from 'react-router-dom'
function Home() {

  // state lifting component
  const[uploadVideoResponse,setVideoResponse]=useState({})
  const[dropVideoResponse,setDropVideoResponse]=useState({})
  return (
    <>
    
    <div className="container mt-5 d-flex justify-content-between mb-3">
      <div className="add-videos">
        <Add setVideoResponse={setVideoResponse}/>
      </div>
      <Link to={'/WatchHistory'} style={{textDecoration:"none"}} className="fs-3 fw-bolder text-danger">WatchHistory <i class="fa-solid fa-arrow-right-to-bracket"></i></Link>
    </div>
    
<div className="container-fluid w-100 row mt-5">
  <div className="col-9 all-videos">
    <View uploadVideoResponse={uploadVideoResponse} setDropVideoResponse={setDropVideoResponse}/>
  </div>
  <div className="col-3 all-catagory">
    <Catagory dropVideoResponse={dropVideoResponse}/>
  </div>
</div>

    </>
  )
}

export default Home
