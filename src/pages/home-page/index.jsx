import { Box } from "@mui/material";
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
        backgroundPosition: "fixed",
      }}
    >
      hi
    </Box>
  );
};
