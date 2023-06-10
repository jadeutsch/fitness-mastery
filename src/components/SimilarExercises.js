import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "24px" }, ml: "20px" }}
        fontWeight={700}
        color="#191919"
        mb="32px"
      >
        Similar <span style={{ color: "#f15025", textTransform: "capitalize" }}>target muscle</span>{" "}
        exercises
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: "relative" }} mb={6}>
        {targetMuscleExercises.length !== 0 ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "24px" }, ml: "20px", mt: { lg: "100px", xs: "60px" } }}
        fontWeight={700}
        color="#191919"
        mb="32px"
      >
        Similar <span style={{ color: "#f15025", textTransform: "capitalize" }}>equipment</span>{" "}
        exercises
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: "relative" }}>
        {equipmentExercises.length !== 0 ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
