import React from "react";
import { Stack, Typography } from "@mui/material";

import { gym } from "../assets";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={
        bodyPart === item
          ? {
              borderTop: "4px solid #f15025",
              backgroundColor: "#fff",
              borderBottomLeftRadius: "20px",
              width: "270px",
              height: "280px",
              cursor: "pointer",
              gap: "47px",
            }
          : {
              backgroundColor: "#fff",
              borderBottomLeftRadius: "20px",
              width: "270px",
              height: "280px",
              cursor: "pointer",
              gap: "47px",
            }
      }
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img src={gym} alt="gym" style={{ width: "40px", height: "40px" }} />
      <Typography fontSize="24px" fontWeight="bold" color="#191919" textTransform="capitalize">
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
