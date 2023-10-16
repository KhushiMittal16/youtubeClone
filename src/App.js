import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
// import Navbar from "./components/Navbar";
// import VideoDetail from "./components/VideoDetail";
// import ChannelDetail from "./components/ChannelDetail";
// import SearchFeed from "./components/SearchFeed";
// import Feed from "./components/Feed";
import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components";
// require("dotenv").config();

function App() {
  console.log(process.env.REACT_APP_RAPID_API_KEY);
  return (
    <BrowserRouter>
      {/* <Box sx={{ BackgroundColor: "#000" }}> */}
      <div style={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" exact element={<VideoDetail />} />
          <Route path="/channel/:id" exact element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
        </Routes>
      </div>
      {/* </Box> */}
    </BrowserRouter>
  );
}

export default App;
