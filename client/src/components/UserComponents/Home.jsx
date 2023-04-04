import React from "react";
import {
  Stack,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Link,
  useMediaQuery,
} from "@mui/material";
import HomeIcon from "../../assets/HomeIcon.png";

export const Home = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const items = [
    { image: HomeIcon, name: "New Home", link: "/newhome" },
    { image: HomeIcon, name: "Pre existing home", link: "/preexistinghome" },
  ];

  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 8,
      }}
    >
      <Typography variant="h4" color="#8F8F8F">
        My home is
      </Typography>
      <Stack direction={isSmallScreen ? "column" : "row"}>
        {items.map((item, index) => (
          <Card
            key={index}
            sx={{
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              width: 280,
              margin: 6,
              padding: 3,
            }}
          >
            <CardMedia
              image={item.image}
              sx={{
                height: { xs: 100, sm: 100 },
                width: { xs: 100, sm: 100 },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 7,
              }}
            />
            <CardContent sx={{ marginTop: 2 }}>
              <Link
                color="#1CA638"
                href={item.link}
                sx={{ textDecoration: "none" }}
                variant="h5"
                marginLeft={4}
                fontWeight={{ xs: 550 }}
              >
                {item.name}
              </Link>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Stack>
  );
};
