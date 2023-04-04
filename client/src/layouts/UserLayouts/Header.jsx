import { Stack, Box } from "@mui/material";
import LogoLeft from "../../assets/LogoLeft.png";
import LogoRight from "../../assets/LogoRight.png";
import React from "react";

export const Header = () => {
  return (
    <>
      <Stack
        direction="row"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 3,
        }}
      >
        <Box
          component="img"
          src={LogoLeft}
          alt="logo1"
          sx={{ maxWidth: 100, height: "auto" }}
        />

        <Box
          component="img"
          src={LogoRight}
          alt="logo2"
          sx={{ maxWidth: 100, height: "auto" }}
        />
      </Stack>
    </>
  );
};
