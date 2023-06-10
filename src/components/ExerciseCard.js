import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row" justifyContent="center" spacing={2} p="20px">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            backgroundColor: "#f15025",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            textShadow: "1px 1px #272727",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            backgroundColor: "#191919",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            textShadow: "1px 1px #272727",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        mx="auto"
        color="#191919"
        sx={{ fontSize: { lg: "24px", xs: "20px" } }}
        fontWeight={700}
        pb="10px"
        p="2px"
        textTransform="capitalize"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
