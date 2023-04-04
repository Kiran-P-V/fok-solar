import {
  Stack,
  Typography,
  InputAdornment,
  IconButton,
  TextField,
  Button,
  Link,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import { userRegisterSchema } from "../../schema/UserSchema/Schema";
import { useNavigate } from "react-router-dom";
import UserApiCalls from "../../Api/UserApiCalls";

export const SignupForm = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const initialValues = {
    name: "",
    password: "",
    confirm_password: "",
  };
  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: userRegisterSchema,
    onSubmit: async (values, action) => {
      console.log(values);
      if (values) {
        const response = await UserApiCalls.signUp(values);
        if (response) {
          console.log(response, "response from the frontend");
          navigate("/");
          action.resetForm();
        }
      }
    },
  });
  return (
    <>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 2,
        }}
      >
        <Stack
          direction={isSmallScreen ? "column" : "row"}
          sx={{
            display: "flex",
            justifyContent: "space-evently",
            marginY: 7,
          }}
        >
          <Stack maxWidth={300} marginTop={3}>
            <Typography variant="h4">
              Know how much Carbon can you offset?
            </Typography>
          </Stack>

          <Stack
            component="form"
            onSubmit={Formik.handleSubmit}
            noValidate
            sx={{ boxShadow: 1, padding: 4 }}
          >
            <TextField
              label="Username"
              name="name"
              variant="outlined"
              required
              value={Formik.values.name}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              helperText={Formik.touched.name && Formik.errors.name}
              error={
                Boolean(Formik.touched.name) && Boolean(Formik.errors.name)
              }
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              value={Formik.values.password}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              helperText={Formik.touched.password && Formik.errors.password}
              error={
                Boolean(Formik.touched.password) &&
                Boolean(Formik.errors.password)
              }
              type={showPassword ? "text" : "password"}
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
            <TextField
              label="Confirm password"
              name="confirm_password"
              type="password"
              required
              value={Formik.values.confirm_password}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              helperText={
                Formik.touched.confirm_password &&
                Formik.errors.confirm_password
              }
              error={
                Boolean(Formik.touched.confirm_password) &&
                Boolean(Formik.errors.confirm_password)
              }
            ></TextField>
            <Stack
              direction="row"
              display="flex"
              justifyContent="space-between"
              marginY={2}
            >
              <Button variant="contained" color="success" type="submit">
                Sign Up
              </Button>
            </Stack>
            <Link
              href="/"
              variant="body1"
              sx={{ marginLeft: 2, textDecoration: "none" }}
            >
              Already have an account? Login
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
