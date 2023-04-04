import React, { useState } from "react";
import {
  Stack,
  Typography,
  Card,
  InputAdornment,
  Divider,
} from "@mui/material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
export const AddAC = () => {
  const [open, setOpen] = useState(false);
  const [ac, setAC] = useState([]);
  const [tonnage, setTonnage] = useState(1);
  const [hours, setHours] = useState(1);
  const [numAC, setNumACs] = useState(1);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleIncrease = (event) => {
    const field =
      event.target.parentNode.parentNode.parentNode.querySelector("input");
    const name = field.name;

    if (name === "ton") {
      setTonnage((prevState) => prevState + 1);
    } else if (name === "hours") {
      setHours((prevState) => prevState + 1);
    } else if (name === "number") {
      setNumACs((prevState) => prevState + 1);
    }
  };

  const handleDecrease = (event) => {
    const field =
      event.target.parentNode.parentNode.parentNode.querySelector("input");
    const name = field.name;
    const value = field.value;
    if (value > 1) {
      if (name === "ton") {
        setTonnage((prevState) => prevState - 1);
      } else if (name === "hours") {
        setHours((prevState) => prevState - 1);
      } else if (name === "number") {
        setNumACs((prevState) => prevState - 1);
      }
    }
  };

  const handleFormSubmit = () => {
    const newAC = {
      tonnage,
      numAC,
      hours,
    };

    setAC((prevAC) => [...prevAC, newAC]);
    handleClose();
    setTonnage(1);
    setHours(1);
    setNumACs(1);
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
        <Typography variant="h4" color="#8F8F8F">
          Air Conditioners in my home
        </Typography>
        <Stack
          direction="row"
          sx={{ display: "flex", justifyContent: "space-around" }}
        >
          {ac.map((value, index) => {
            return (
              <Card
                key={index}
                sx={{
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 4,
                  marginTop: 3,
                  marginRight: 2,
                }}
              >
                <Typography variant="h5">{value.tonnage} Tonnage</Typography>
                <IndeterminateCheckBoxIcon
                  sx={{ color: "#8F8F8F", marginTop: 3 }}
                />
                <Stack
                  direction="row"
                  spacing={2}
                  marginTop={4}
                  color="#8F8F8F"
                >
                  <Typography>{value.hours} Hours</Typography>
                  <Typography>{value.numAC} Nos</Typography>
                </Stack>
              </Card>
            );
          })}
          <Card
            sx={{
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 6,
              marginTop: 3,
            }}
          >
            <AddCircleIcon
              onClick={handleOpen}
              sx={{
                color: "#DADCE0",
                marginBottom: 3,
                "&:hover": { cursor: "pointer", color: "grey" },
              }}
              fontSize="large"
            />
            <Typography sx={{ color: "#DADCE0" }} variant="h5">
              Add A/C
            </Typography>
          </Card>
        </Stack>
      </Stack>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Air Conditioner</DialogTitle>
        <Divider />
        <DialogContent>
          <Stack
            direction="row"
            spacing={2}
            sx={{ display: "flex", justifyContent: "space-around" }}
          >
            <Typography sx={{ marginY: 2, marginRight: 2 }}>Tonnage</Typography>
            <TextField
              sx={{
                maxWidth: 200,
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              }}
              mt={2}
              value={tonnage}
              name="ton"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    Ton
                    <AddIcon
                      onClick={handleIncrease}
                      sx={{
                        marginLeft: 2,
                        "&:hover": {
                          cursor: "pointer",
                        },
                      }}
                    />
                  </InputAdornment>
                ),
                startAdornment: (
                  <InputAdornment
                    position="start"
                    sx={{
                      marginRight: 4,
                      "&:hover": { cursor: "pointer" },
                    }}
                  >
                    <RemoveIcon onClick={handleDecrease} />
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
          <Stack
            direction="row"
            spacing={1.7}
            marginY={2.5}
            sx={{ display: "flex", justifyContent: "space-around" }}
          >
            <Typography>
              Average use <br /> Daily(hours)
            </Typography>
            <TextField
              sx={{
                maxWidth: 200,
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              }}
              mt={2}
              name="hours"
              value={hours}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    Hours
                    <AddIcon
                      onClick={handleIncrease}
                      sx={{
                        marginLeft: 2,
                        "&:hover": {
                          cursor: "pointer",
                        },
                      }}
                    />
                  </InputAdornment>
                ),
                startAdornment: (
                  <InputAdornment
                    position="start"
                    sx={{
                      marginRight: 4,
                      "&:hover": { cursor: "pointer" },
                    }}
                  >
                    <RemoveIcon onClick={handleDecrease} />
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            sx={{ display: "flex", justifyContent: "space-around" }}
          >
            <Typography>
              Number of <br /> ACs
            </Typography>
            <TextField
              sx={{
                maxWidth: 200,
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              }}
              name="number"
              mt={2}
              value={numAC}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    Nos.
                    <AddIcon
                      onClick={handleIncrease}
                      sx={{
                        marginLeft: 2,
                        "&:hover": {
                          cursor: "pointer",
                        },
                      }}
                    />
                  </InputAdornment>
                ),
                startAdornment: (
                  <InputAdornment
                    position="start"
                    sx={{
                      marginRight: 4,
                      "&:hover": { cursor: "pointer" },
                    }}
                  >
                    <RemoveIcon onClick={handleDecrease} />
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleFormSubmit}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
