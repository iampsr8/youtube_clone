import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { Box } from '@mui/material'
import Videos from './Videos'
import ChannelCard from './ChannelCard'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () => {
  const { id } = useParams()

  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => { setChannelDetail(data?.items[0]) })
      fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data)=>{setVideos(data?.items)})
  },[id])

  // console.log(videos)
  return (
    <Box minHeight='95vh' sx={{background: "#101010"}}>
      <Box>
        <div
          style={{
            background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 0%, rgba(154,0,0,1) 100%)',
            zIndex: 10,
            height:'200px'
          }}
          />
          <ChannelCard channelDetail={channelDetail} marginTop='-110px' />
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{ mr: { sm: '100px' } }}/>
          <Videos videos={videos}/>

      </Box>
    </Box>
  )
}

export default ChannelDetail