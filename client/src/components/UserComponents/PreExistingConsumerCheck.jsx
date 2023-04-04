import { TextField, Typography, Stack, Button } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const PreExistingConsumerCheck = () => {
  const navigate = useNavigate();
  const [num, setNum] = useState();
  const [error, setError] = useState("");
  const handleCheck = () => {
    if (num) {
      navigate("/estimate");
    } else {
      setError("Plese enter consumer number");
    }
  };
  const handleChange = (e) => {
    setNum(e.target.value);
    setError("");
  };
  return (
    <>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 8,
        }}
      >
        <Typography variant="h4">
          My KSEB consumer Number{" "}
          <InfoIcon sx={{ marginTop: 2, color: "#8F8F8F" }} />
        </Typography>
        <Stack direction="row">
          <TextField
            sx={{ margin: 3 }}
            label="Consumer Number"
            type="number"
            onChange={handleChange}
            helperText={error && error}
            error={error && error}
          />
          <Button
            sx={{ marginLeft: 2, color: "#8F8F8F", marginY: 3 }}
            disableRipple
            onClick={handleCheck}
          >
            Check
          </Button>
        </Stack>
      </Stack>
    </>
  );
};
