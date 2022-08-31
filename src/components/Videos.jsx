import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import Loader from "./Loader";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader/>
//   console.log(videos);
  let channel=null;
  videos.forEach((vid) => {
    if (vid?.id?.channelId) {
      channel = vid;
    }
  });
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      sx={{justifyContent:{xs:'center',md:'start'}}}
      alignItems="start"
      gap={2}
    >
      {channel && <ChannelCard channelDetail={channel} />}
      {videos.map((item, idx) => (
        <Box key={idx}>{item.id.videoId && <VideoCard video={item} />}</Box>
      ))}
    </Stack>
  );
};

export default Videos;
