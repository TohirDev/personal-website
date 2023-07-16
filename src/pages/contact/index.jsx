import { Box, Grid, Typography } from "@mui/material";
export const Contact = () => {
  return (
    <Box
      sx={{
        width: "fit-content",
        width: "85%",
        marginLeft: "auto",
        background: "#212529",
        backgroundSize: "cover",
        backgroundPosition: "fixed",
        // height: "100vh",
      }}
      id="aboutme"
    >
      <Box sx={{ width: "1440px", margin: "0px auto", pt: 15 }}>
        <Typography
          variant="h1"
          id="text"
          sx={{
            textAlign: "center",
            fontSize: "2.5rem",
            // my: 20,
            color: "#fff",
            position: "relative",
            width: "100%",
            zIndex: "1",
            fontWeight: "bold",
            py: 10,
            "&::after": {
              content: '""',
              width: "80px",
              height: "5px",
              backgroundColor: "#20c997",
              display: "block",
              margin: "10px auto",
            },
            "&::before": {
              content: '"CONTACT"',
              color: "#6c757d",
              opacity: ".2",
              zIndex: "-1",
              position: "absolute",
              fontSize: "8rem",
              width: "100%",
              top: -45,
              left: 0,
              fontWeight: "bold",
            },
          }}
        >
          Get in Touch
        </Typography>
        <Grid container spacing={3} sx={{ mt: 10 }}>
          <Grid item xs={12} md={4} sx={{ color: "#dee3e4!important" }}>
            <Typography variant="h5">ADDRESS</Typography>
            <Typography variant="body1" sx={{ my: 5, width: "40%", lineHeight: "40px" }}>
              4th Floor, Plot No.22, 145 Murphy Canyon Rd. San Diego CA 2028
            </Typography>
            <Typography variant="body1" sx={{ my: 3 }}>
              (060) 444 434 444
            </Typography>
            <Typography variant="body1" sx={{ my: 3 }}>
              (060) 555 545 555
            </Typography>
            <Typography variant="body1" sx={{ my: 3 }}>
              chat@simone.com
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ color: "#fff" }}>
            <Typography variant="h5">END US A NOTE</Typography>
            <Typography variant="body1">
              4th Floor, Plot No.22, 145 Murphy Canyon Rd. San Diego CA 2028
            </Typography>
            <Typography variant="body1">(060) 444 434 444</Typography>
            <Typography variant="body1">(060) 555 545 555</Typography>
            <Typography variant="body1">chat@simone.com</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
