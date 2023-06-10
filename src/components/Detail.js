import React from "react";
import { Typography, Stack, Button } from "@mui/material";

import {
  bodyPart as bodyPartIcon,
  target as targetIcon,
  equipment as equipmentIcon,
} from "../assets";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    {
      icon: bodyPartIcon,
      name: bodyPart,
    },
    {
      icon: targetIcon,
      name: target,
    },
    {
      icon: equipmentIcon,
      name: equipment,
    },
  ];

  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography
          sx={{ fontSize: { lg: "64px", xs: "30px" } }}
          fontWeight={700}
          textTransform="capitalize"
        >
          {name}
        </Typography>
        <Typography sx={{ fontSize: { lg: "24px", xs: "18px" } }} color="#4f4c4c">
          Exercises keep you strong. {name.toString().toUpperCase()} {` `}
          is one of the best exercises to target your {target}. It will help you improve your mood
          and gain energy.
        </Typography>
        {extraDetail?.map((item, index) => (
          <Stack key={`${item.name}-${index}`} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#fff2db",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img src={item.icon} alt={bodyPart} style={{ width: "50px", height: "50px" }} />
            </Button>
            <Typography sx={{ fonSize: { lg: "30px", xs: "20px" } }} textTransform="capitalize">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
