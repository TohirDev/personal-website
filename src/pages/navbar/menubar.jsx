import { Box, Typography } from "@mui/material";
import { useRef } from "react";

export const MenuBar = () => {
  const navRef = useRef();
  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        height: "50px",
        background: "#111418",
        top: 0,
        left: 0,
        display: {
          xs: "flex",
          md: "none",
        },
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 20px",
        color: "#fff",
        zIndex: 15,
      }}
    >
      <Typography variant="h6">Simone some</Typography>

      <Box
        ref={navRef}
        sx={{
          position: "fixed",
          backgroundColor: "#111418",
          display: "flex",
          // alignItems: "center",
          // justifyContent: "space-between",
          flexDirection: "column",
          minWidth: "100%",
          height: "500px",
          top: "-100%",
          left: 0,
          transition: ".3s ease",
        }}
      >
        <Box
          sx={{
            display: "flex",
            // alignItems: "center",
            justifyContent: "space-between",
            // flexDirection: "column",
            minWidth: "100%",
          }}
        >
          <Typography variant="h6" sx={{ margin: "20px " }}>
            Simone some
          </Typography>
          <Box
            sx={{ fontSize: "30px", margin: "20px" }}
            onClick={() => (navRef.current.style.top = "-100%")}
          >
            <i className="fa-solid fa-xmark"></i>
          </Box>
        </Box>
        <Box
          onClick={() => (navRef.current.style.top = "-100%")}
          component="a"
          variant="body1"
          href="#home"
          sx={{
            mt: 3,
            color: "#fff",
            fontSize: "18px",
            ml: 3,
            position: "relative",
            textDecoration: "none",
            "&::after": {
              content: '""',
              width: "90%",
              height: "1px",
              background: "rgba(225,225,225,.4)",
              position: "absolute",
              left: 0,
              bottom: -10,
            },
            "&:hover": {
              color: "#20c997",
            },
          }}
        >
          Home
        </Box>
        <Box
          onClick={() => (navRef.current.style.top = "-100%")}
          component="a"
          variant="body1"
          href="#aboutme"
          sx={{
            mt: 3,
            color: "#fff",
            fontSize: "18px",
            ml: 3,
            position: "relative",
            textDecoration: "none",
            "&::after": {
              content: '""',
              width: "90%",
              height: "1px",
              background: "rgba(225,225,225,.4)",
              position: "absolute",
              left: 0,
              bottom: -10,
            },
            "&:hover": {
              color: "#20c997",
            },
          }}
        >
          About Me
        </Box>
        <Box
          onClick={() => (navRef.current.style.top = "-100%")}
          component="a"
          variant="body1"
          href="#whatido"
          sx={{
            mt: 3,
            color: "#fff",
            fontSize: "18px",
            ml: 3,
            position: "relative",
            textDecoration: "none",
            "&::after": {
              content: '""',
              width: "90%",
              height: "1px",
              background: "rgba(225,225,225,.4)",
              position: "absolute",
              left: 0,
              bottom: -10,
            },
            "&:hover": {
              color: "#20c997",
            },
          }}
        >
          What I Do
        </Box>
        <Box
          onClick={() => (navRef.current.style.top = "-100%")}
          component="a"
          variant="body1"
          href="#resume"
          sx={{
            mt: 3,
            color: "#fff",
            fontSize: "18px",
            ml: 3,
            position: "relative",
            textDecoration: "none",
            "&::after": {
              content: '""',
              width: "90%",
              height: "1px",
              background: "rgba(225,225,225,.4)",
              position: "absolute",
              left: 0,
              bottom: -10,
            },
            "&:hover": {
              color: "#20c997",
            },
          }}
        >
          Resume
        </Box>
        <Box
          onClick={() => (navRef.current.style.top = "-100%")}
          component="a"
          variant="body1"
          href="#portfolio"
          sx={{
            mt: 3,
            color: "#fff",
            fontSize: "18px",
            ml: 3,
            position: "relative",
            textDecoration: "none",
            "&::after": {
              content: '""',
              width: "90%",
              height: "1px",
              background: "rgba(225,225,225,.4)",
              position: "absolute",
              left: 0,
              bottom: -10,
            },
            "&:hover": {
              color: "#20c997",
            },
          }}
        >
          Portfolio
        </Box>
        <Box
          onClick={() => (navRef.current.style.top = "-100%")}
          component="a"
          variant="body1"
          href="#contact"
          sx={{
            mt: 3,
            color: "#fff",
            fontSize: "18px",
            ml: 3,
            position: "relative",
            textDecoration: "none",
            "&::after": {
              content: '""',
              width: "90%",
              height: "1px",
              background: "rgba(225,225,225,.4)",
              position: "absolute",
              left: 0,
              bottom: -10,
            },
            "&:hover": {
              color: "#20c997",
            },
          }}
        >
          Contact
        </Box>
      </Box>

      <Box sx={{ mr: 5, fontSize: "30px" }} onClick={() => (navRef.current.style.top = "0")}>
        <i className="fa-solid fa-bars"></i>
      </Box>
    </Box>
  );
};
