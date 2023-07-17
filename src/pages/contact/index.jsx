import { Box, Button, Grid, TextField, TextareaAutosize, Typography, styled } from "@mui/material";
export const Contact = () => {
  const StyledTextarea = styled(TextareaAutosize)(
    () => `
        width: 98%;
        max-width: 99%;
        min-width: 98%;
        font-family: Poppins, sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 12px;
        border-radius: 12px 12px 0 12px;
        color: #fff;
        background: #343a40;
       
      
        outline: none;
        margin-top: 20px;
       
      `
  );
  return (
    <Box
      id="contact"
      sx={{
        width: "fit-content",
        width: {
          md: "85%",
          xs: "100%",
        },
        marginLeft: "auto",
        background: "#212529",
        backgroundSize: "cover",
        backgroundPosition: "fixed",
        // height: "100vh",
      }}
    >
      <Box sx={{ maxWidth: "1440px", margin: "0px auto", pt: 15, padding: "20px" }}>
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
              content: '"CONTACT"',
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
                xs: -15,
              },
              left: 0,
              fontWeight: "bold",
            },
            mt: 6,
          }}
        >
          Get in Touch
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: {
              xs: "column",
              md: "row",
            },
          }}
        >
          <Grid container spacing={1} sx={{ mt: 10 }}>
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                color: "#dee3e4",
                fontFamily: "Poppins, sans-serif",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography variant="h5" sx={{ fontFamily: "Poppins, sans-serif" }}>
                ADDRESS
              </Typography>
              <Typography
                variant="body1"
                sx={{ my: 3, width: "50%", fontFamily: "Poppins, sans-serif" }}
              >
                4th Floor, Plot No.22, 145 Murphy Canyon Rd. San Diego CA 2028
              </Typography>
              <Typography sx={{ fontFamily: "Poppins, sans-serif", my: 1 }}>
                (060) 444 434 444
              </Typography>
              <Typography sx={{ fontFamily: "Poppins, sans-serif", my: 1 }}>
                (060) 555 545 555
              </Typography>
              <Typography sx={{ fontFamily: "Poppins, sans-serif", my: 1 }}>
                chat@simone.com
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={1} sx={{ display: "grid", placeItems: "center", mt: 4 }}>
            <Grid item xs={12}>
              <input
                style={{
                  width: "100%",
                  outline: "none",
                  border: "none",
                  height: "50px",
                  borderRadius: "5px",
                  fontSize: "19px",
                  paddingLeft: "20px",
                  background: "#343a40",
                  color: "#fff",
                }}
                placeholder="Name"
              />
            </Grid>
            <Grid item xs={12}>
              <input
                style={{
                  width: "100%",
                  outline: "none",
                  border: "none",
                  height: "50px",
                  borderRadius: "5px",
                  fontSize: "19px",
                  paddingLeft: "10px",
                  background: "#343a40",
                  color: "#fff",
                  paddingLeft: "20px",
                }}
                placeholder="Email"
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextarea
                // aria-label="minimum height"
                minRows={3}
                placeholder="Tell us more about you needs"
              />
            </Grid>
            <Box
              component="button"
              sx={{
                border: "none",
                outline: "none",
                padding: "20px 40px",
                fontSize: "20px",
                borderRadius: "50px",
                color: "#fff",
                background: "#20c997",
                mt: 3,
              }}
            >
              Send Message
            </Box>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
