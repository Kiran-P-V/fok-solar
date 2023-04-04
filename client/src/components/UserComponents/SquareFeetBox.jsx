import { Stack, Typography, Select, MenuItem, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const SquareFeetBox = () => {
  const navigate = useNavigate();
  const squareFeetOptions = [];
  for (let i = 1500; i <= 2500; i += 100) {
    squareFeetOptions.push(i);
  }
  return (
    <>
      <Stack
        sx={{
          display: "flex",

          alignItems: "center",
          marginY: 10,
        }}
      >
        <Typography variant="h4" color="#8F8F8F">
          Square Footage of my home
        </Typography>
        <Stack direction="row">
          <Select
            defaultValue="2500"
            sx={{
              width: 260,
              marginY: 2,
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            }}
            required
          >
            <MenuItem disabled>Select Square Feet</MenuItem>
            {squareFeetOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
          <Button
            sx={{ marginLeft: 2, color: "#8F8F8F" }}
            disableRipple
            onClick={() => navigate("/estimate")}
          >
            Check
          </Button>
        </Stack>
      </Stack>
    </>
  );
};
