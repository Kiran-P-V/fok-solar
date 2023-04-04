import React from "react";
import { Box, Stack, Button } from "@mui/material";
import EstimateImage from "../../assets/EstimateImage.png";
import { useTheme } from "@emotion/react";
export const EstimateComponent = () => {
  const theme = useTheme();

  return (
    <>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={EstimateImage}
          alt="estimate"
          sx={{
            width: "100%",
            height: "auto",
            marginTop: 7,
            [theme.breakpoints.up("sm")]: {
              height: 300,
              width: 900,
            },
            [theme.breakpoints.up("md")]: {
              height: 400,
            },
            [theme.breakpoints.up("lg")]: {
              height: 550,
            },
          }}
        />
        <Button
          variant="contained"
          color="success"
          // sx={{ marginTop: 3, marginLeft: 66 }}
          href="/email"
        >
          Email estimate
        </Button>
      </Stack>
    </>
  );
};
