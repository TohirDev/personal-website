import { Box, Button, Typography } from "@mui/material";
import HomePageImg from "../../assets/homepage.jpg";
import { MenuBar } from "pages/navbar/menubar";
export const HomePage = () => {
  return (
    <Box
      sx={{
        width: "fit-content",
        width: {
          xs: "100%",
          lg: "85%",
        },
        marginLeft: "auto",
        height: "100vh",
        background: `url(${HomePageImg})`,
        backgroundSize: "cover",
        backgroundAttachment: {
          xs: "unset",
          lg: "fixed",
        },
        position: "relative",
      }}
      id="home"
    >
      <MenuBar />
      <Box
        sx={{
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.6)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Typography variant="h3" color="#fff">
          Welcome
        </Typography>
        <Typography
          variant="h1"
          color="#fff"
          sx={{
            mt: 5,
            fontSize: {
              xs: "50px",
              lg: "100px",
            },
          }}
        >
          I&apos;m Isakulov Tohir
        </Typography>
        <Typography variant="h4" color="#fff" sx={{ mt: 5, textAlign: "center" }}>
          based in Los Angeles, California
        </Typography>
        <button
          style={{
            border: "2px solid #20c997",
            outline: "none",
            background: "transparent",
            padding: "15px 40px",
            padding: "15px 40px",
            borderRadius: "30px",
            color: "#20c997",
            fontSize: "18px",
            cursor: "pointer",
            marginTop: "30px",
          }}
        >
          Hire Me
        </button>
        <Box
          component="a"
          id="scroll-btn"
          href="#aboutme"
          sx={{
            position: "absolute",
            height: {
              md: "80px",
              xs: "40px",
            },
            width: {
              md: "40px",
              xs: "20px",
            },
            border: {
              md: "5px solid #ffffff",
              xs: "2px solid #ffffff",
            },
            margin: "auto",
            left: 0,
            right: 0,
            bottom: {
              md: "6.25em",
              xs: "3em",
            },
            borderRadius: "3em",
            "&::before": {
              position: "absolute",
              content: '""',
              margin: "auto",
              left: 0,
              right: 0,
              top: {
                md: "1.2em",
                xs: "0.3em",
              },
              height: {
                md: "10px",
                xs: "5px",
              },
              width: {
                md: "10px",
                xs: "5px",
              },
              background: "#fff",
              borderRadius: "50%",
              animation: "move-down 1.5s infinite",
            },
          }}
        ></Box>
      </Box>
    </Box>
  );
};
