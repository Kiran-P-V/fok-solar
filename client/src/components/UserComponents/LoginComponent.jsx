import {
  Stack,
  Box,
  Typography,
  InputAdornment,
  IconButton,
  TextField,
  Button,
  Link,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import LoginImage from "../../assets/LoginPageImage.png";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { userLoginSchema } from "../../schema/UserSchema/Schema";

export const LoginComponent = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const initialValues = {
    name: "",
    password: "",
  };
  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: userLoginSchema,
    onSubmit: async (values) => {
      navigate("/home");
    },
  });
  return (
    <>
      <Stack
        direction={isSmallScreen ? "column" : "row"}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          marginY: 7,
        }}
      >
        <Box component="img" src={LoginImage} alt="logo3" />
        <Stack
          component="form"
          onSubmit={Formik.handleSubmit}
          noValidate
          sx={{ boxShadow: 1, padding: 4 }}
        >
          <Typography variant="h4" mb={2} fontWeight={600}>
            Kiosk login
          </Typography>
          <TextField
            label="Username"
            variant="outlined"
            required
            name="name"
            value={Formik.values.name}
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
            helperText={Formik.touched.name && Formik.errors.name}
            error={Boolean(Formik.touched.name) && Boolean(Formik.errors.name)}
            sx={{ paddingTop: "0.9rem" }}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            value={Formik.values.password}
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
            helperText={Formik.touched.password && Formik.errors.password}
            error={
              Boolean(Formik.touched.password) &&
              Boolean(Formik.errors.password)
            }
            sx={{ paddingTop: "0.9rem" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            autoComplete="current-password"
          />
          <Stack
            direction="row"
            display="flex"
            justifyContent="space-between"
            marginY={2}
          >
            <Button variant="contained" color="success" type="submit">
              Login
            </Button>
            <Typography color="primary">forgot password?</Typography>
          </Stack>
          <Link
            href="/signup"
            variant="body1"
            sx={{ marginLeft: 2, textDecoration: "none" }}
          >
            Dont't have an account?/Sign up
          </Link>
        </Stack>
      </Stack>
    </>
  );
};
