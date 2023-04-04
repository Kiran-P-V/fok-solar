import React from "react";
import { Stack, Avatar, Typography, Button } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export const SuccessEmailComponent = () => {
  return (
    <>
      <Stack sx={{ display: "flex", alignItems: "center", marginTop: 10 }}>
        <Stack
          sx={{
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            display: "flex",
            alignItems: "center",
            padding: 4,
          }}
        >
          <Avatar sx={{ bgcolor: "#1CA638", height: 80, width: 80 }}>
            <MailOutlineIcon fontSize="large" />
          </Avatar>
          <Typography
            variant="h6"
            marginY={2.5}
            fontWeight={550}
            color="#1CA638"
          >
            Estimate send successfully
          </Typography>
          <Typography color="#8F8F8F" marginY={2.5}>
            Dear username
          </Typography>
          <Typography color="#8F8F8F">
            Estimate has been sent to UserPhoneNumber and someone@somewhere.com{" "}
          </Typography>
          <Typography color="#8F8F8F">
            {" "}
            successfully. Someone from our team will contact you shortly.
          </Typography>
        </Stack>
        <Button
          variant="contained"
          color="success"
          sx={{ marginTop: 3 }}
          href="/home"
        >
          Back to home
        </Button>
      </Stack>
    </>
  );
};
