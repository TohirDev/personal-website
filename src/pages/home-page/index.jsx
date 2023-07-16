import { Box, Button, Typography } from "@mui/material";
import HomePageImg from "../../assets/homepage.jpg";
export const HomePage = () => {
  return (
    <Box
      sx={{
        width: "fit-content",
        width: "85%",
        marginLeft: "auto",
        height: "100vh",
        background: `url(${HomePageImg})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.4)",
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
        <Typography variant="h1" color="#fff" sx={{ mt: 5 }}>
          I&apos;m Isakulov Tohir
        </Typography>
        <Typography variant="h4" color="#fff" sx={{ mt: 5 }}>
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
        <a id="scroll-btn" href="#aboutme"></a>
      </Box>
    </Box>
  );
};
