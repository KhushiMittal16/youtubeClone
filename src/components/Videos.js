import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, direction}) => {
  console.log("videos", videos);
  // if(!videos.length) return "Loading..."
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" gap="2" width="100%">
      {videos?.map((item, idx) => {
        return (
          <Box key={idx}>
            {item?.id.videoId && <VideoCard video={item} />}
            {/* {item?.id?.videoId ? <VideoCard video={item} /> : "xyz"} */}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
