import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../utils/fetchFromApi";
import { ChannelCard, Videos } from "./";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetchFromApi(`channels?.part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data.items[0])
    );
    console.log("chaneelDetails", setChannelDetail);
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setChannelDetail(data?.items[0])
    );
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(0,238,247,1),0%,rgba(206,3,184,1),100%,rgba(0,212,255,1) 100%",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-103px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
