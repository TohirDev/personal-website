const { Box, Typography } = require("@mui/material");
import { color } from "@mui/system";
import ProfileImg from "../../assets/profile.jpg";
export const Navbar = () => {
  const LinkStyles = {
    mt: 2,
    fontSize: "19px",
    cursor: "pointer",
    "&:hover": {
      color: "#20c997",
    },
    transition: ".3s ease",
  };

  return (
    <Box
      sx={{
        background: "#111418",
        height: "100vh",
        minWidth: "260px",
        width: "15%",
        position: "fixed",
        top: 0,
        left: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ mt: 5 }}>
        <Box
          component="img"
          sx={{ border: "8px solid #343a40", borderRadius: "50%", width: "200px" }}
          src={ProfileImg}
        />
        <Typography
          sx={{ fontSize: "25px", color: "#fff", textAlign: "center", fontWeight: "400", mt: 2 }}
        >
          Isakulov Tohir
        </Typography>
      </Box>
      <Box sx={{ color: "#fff" }}>
        <Typography sx={LinkStyles}>Home</Typography>
        <Typography sx={LinkStyles}>About Me</Typography>
        <Typography sx={LinkStyles}>What I Do</Typography>
        <Typography sx={LinkStyles}>Resume</Typography>
        <Typography sx={LinkStyles}>Portfolio</Typography>
        <Typography sx={LinkStyles}>Contact</Typography>
      </Box>
      <Box sx={{ mb: 5, color: "#aab1b8" }}>
        <Box
          component="a"
          sx={{
            color: "#aab1b8",
            fontSize: "20px",
            "&:hover": { color: "#3b5998" },
            mx: 1,
            transition: ".3s ease",
          }}
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
        >
          <Box component="i" className="fa-brands fa-facebook-f" />
        </Box>
        <Box
          component="a"
          sx={{
            color: "#aab1b8",
            fontSize: "20px",
            "&:hover": { color: "#00acee" },
            mx: 1,
            transition: ".3s ease",
          }}
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer"
        >
          <Box component="i" className="fa-brands fa-twitter" />
        </Box>
        <Box
          component="a"
          sx={{
            color: "#aab1b8",
            fontSize: "20px",
            "&:hover": { color: "#cd486b" },
            mx: 1,
            transition: ".3s ease",
          }}
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
        >
          <Box component="i" className="fa-brands fa-instagram" />
        </Box>
        <Box
          component="a"
          sx={{
            color: "#aab1b8",
            fontSize: "20px",
            transition: ".3s ease",
            "&:hover": { color: "#fafafa" },
            mx: 1,
          }}
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
        >
          <Box component="i" className="fa-brands fa-github" />
        </Box>
      </Box>
    </Box>
  );
};
