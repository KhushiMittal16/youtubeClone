import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/Constants";
const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        width: "110%",
        height: { sx: "auto", md: "95%" },
        flexDirection: "column",
        BackgroundColor: "#000",
        scrollbarColor: "#000",
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          onClick={()=>setSelectedCategory(category.name)}
          style={{
            color: "#fff",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            background: category.name === selectedCategory ? "#fc1503" : "#000",
            // color: "white",
          }}
          key={category.name}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>

          <span
            style={{
              opacity: category.name === selectedCategory.name ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
