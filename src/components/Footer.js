import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import { appLogo } from "../assets";

const Footer = () => {
  return (
    <Box mt="80px" backgroundColor="#e6e8e6">
      <Stack gap="40px" sx={{ alignItems: "center" }} flexWrap="wrap" px="40px" pt="24px">
        <img src={appLogo} alt="Fitness World" width="200px" height="58px" />
        <Typography
          variant="h5"
          sx={{ fontSize: { lg: "28px", xs: "20px" } }}
          textAlign="center"
          pb="40px"
          mt="20px"
        >
          by Jeff Deutsch
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
