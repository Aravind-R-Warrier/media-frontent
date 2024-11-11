import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryApi, getHistoryApi } from '../Services/AllApis'

function WatchHistory() {

  const[watchHistory,setWatchHistory]=useState([])




  useEffect(()=>{
    getHistory()

  },[])

  const getHistory= async ()=>{
    const result=await getHistoryApi()
    if(result.status===200){
      setWatchHistory(result.data)
    }else{
      console.log('api failed')
      setWatchHistory(result.message)
    }
  }

  const removeVideoHistory=async (id)=>{
    await deleteHistoryApi(id)
    getHistory()
  }



  return (
    <>
      <div className="container mt-5 mb-3 d-flex justify-content-between">
        <h2>Watch History</h2>
        <Link style={{textDecoration:"none",color:"red",fontSize:"25px"}} to={"/Home"}>Back To Home <i class="fa-solid fa-arrow-left fa-fade"></i></Link>
      </div>

      <div className="container mt-5 mb-3 w-100">

        <table className='table shadow w-100 p-2 m-2'>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>vide URl</th>
            <th>Time Stamp</th>
            <th>Action</th>
          </tr>

         {watchHistory?.length>0?watchHistory.map((video,index)=>(
            <tr>
            <td>{index+1}</td>
            <td>{video?.caption}</td>
            <td><a href={video?.link}>{video?.link}</a></td>
            <td>{video?.timeStamp}4</td>
            <td><button variant="primary" className='btn text-danger pb-2'><i class="fa-solid fa-trash" onClick={()=>removeVideoHistory(video?.id)}></i></button>  </td>
          
          </tr>
         )): <p className='text-danger fw-bolder'>Nothing to display</p>
        
          }
        </table>
      </div>


    </>
  )
}

export default WatchHistory
