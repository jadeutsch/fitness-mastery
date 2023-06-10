import React from "react";
import { Box, Typography, Button } from "@mui/material";

//import HeroBannerImage from "https://jeffdeutsch-projects.s3.amazonaws.com/fitnessworld/banner2.png";

import { banner as HeroBannerImage } from "../assets";

const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }} position="relative" p="20px">
      <Typography color="#f15025" fontWeight={600} fontSize="24px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="24px"
        mt="30px"
      >
        Sweat, Smile, <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="36px" mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{ backgroundColor: "#f15025", padding: "10px" }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#f15025"
        sx={{ opacity: 0.3, display: { lg: "block", xs: "none" }, fontSize: "200px" }}
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="Hero Banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
