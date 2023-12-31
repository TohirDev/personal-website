import { Box, Grid, Typography } from "@mui/material";
import photo1 from "../../assets/photo1.jpg";
import photo2 from "../../assets/photo2.jpg";
import photo3 from "../../assets/photo3.jpg";
import photo4 from "../../assets/photo4.jpg";
import photo5 from "../../assets/photo5.jpg";
import photo6 from "../../assets/photo6.jpg";
import photo7 from "../../assets/photo7.jpg";
export const Portfolio = () => {
  return (
    <Box
      sx={{
        width: "fit-content",
        width: {
          md: "85%",
          xs: "100%",
        },
        marginLeft: "auto",
        background: "#343a40",
        backgroundSize: "cover",
        backgroundPosition: "fixed",
        // height: "100vh",
        py: 10,
      }}
      id="portfolio"
    >
      <Box sx={{ maxWidth: "1440px", margin: "0px auto", pt: 15, height: "100%", padding: "20px" }}>
        <Typography
          variant="h1"
          id="text"
          sx={{
            textAlign: "center",
            fontSize: {
              lg: "2.5rem",
              xs: "30px",
            },
            color: "#fff",
            position: "relative",
            width: "100%",
            zIndex: "1",
            fontWeight: "bold",
            "&::after": {
              content: '""',
              width: "80px",
              height: "5px",
              backgroundColor: "#20c997",
              display: "block",
              margin: "10px auto",
            },
            "&::before": {
              content: '"PORTFOLIO"',
              color: "#6c757d",
              opacity: ".2",
              zIndex: "-1",
              position: "absolute",
              fontSize: {
                lg: "8rem",
                xs: "60px",
              },
              width: "100%",
              top: {
                lg: -45,
                xs: -10,
              },
              left: 0,
              fontWeight: "bold",
            },
            mt: 6,
          }}
        >
          My Work
        </Typography>
        <Grid container spacing={3} sx={{ mt: 10 }}>
          <Grid item xs={12} md={4}>
            <img src={photo1} style={{ width: "100%", borderRadius: "10px", marginTop: "20px" }} />
            <img src={photo2} style={{ width: "100%", borderRadius: "10px", marginTop: "20px" }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <img src={photo3} style={{ width: "100%", borderRadius: "10px", marginTop: "20px" }} />
            <img src={photo6} style={{ width: "100%", borderRadius: "10px", marginTop: "20px" }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <img src={photo5} style={{ width: "100%", borderRadius: "10px", marginTop: "20px" }} />
            <img src={photo4} style={{ width: "100%", borderRadius: "10px", marginTop: "20px" }} />
            <img src={photo7} style={{ width: "100%", borderRadius: "10px", marginTop: "20px" }} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
