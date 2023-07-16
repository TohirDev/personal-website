import { Box, Divider, Grid, Typography } from "@mui/material";
export const AboutMe = () => {
  return (
    <Box
      sx={{
        width: "fit-content",
        width: "85%",
        marginLeft: "auto",
        background: "#212529",
        backgroundSize: "cover",
        backgroundPosition: "fixed",
        height: "100vh",
      }}
      id="aboutme"
    >
      <Box sx={{ width: "1440px", margin: "0px auto", pt: 15, height: "100%" }}>
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
            "&::after": {
              content: '""',
              width: "80px",
              height: "5px",
              backgroundColor: "#20c997",
              display: "block",
              margin: "10px auto",
            },
            "&::before": {
              content: '"ABOUT ME"',
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
          Know Me More
        </Typography>
        <Grid
          container
          spacing={3}
          sx={{ display: "flex", justifyContent: "space-between", mt: 10 }}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ color: "#fff", fontWeight: "bold", my: 5 }}>
              I&apos;m Simone Olivia, a Web Developer
            </Typography>
            <Typography variant="body1" sx={{ color: "hsla(0,0%,100%,.5)", lineHeight: "30px" }}>
              I help you build brand for your business at an affordable price. Thousands of clients
              have procured exceptional results while working with our dedicated team. when an
              unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "hsla(0,0%,100%,.5)", mt: 5, lineHeight: "30px" }}
            >
              Delivering work within time and budget which meets client&apos;s requirements is our
              moto. Lorem Ipsum has been the industry&apos;s standard dummy text ever when an
              unknown printer took a galley.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ float: "right" }}>
            <Box sx={{ marginLeft: "100px" }}>
              <Typography
                variant="body1"
                sx={{
                  color: "#FFF",
                  my: 5,
                  fontWeight: "bold",
                  fontSize: "20px",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    width: "300px",
                    height: "1px",
                    background: "#fff",
                    position: "absolute",
                    bottom: -20,
                    left: 0,
                    opacity: ".3",
                  },
                }}
              >
                Name:{" "}
                <span
                  style={{
                    fontWeight: "400",
                  }}
                >
                  {" "}
                  Isakulov Tohir
                </span>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#FFF",
                  my: 5,
                  fontWeight: "bold",
                  fontSize: "20px",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    width: "300px",
                    height: "1px",
                    background: "#fff",
                    position: "absolute",
                    bottom: -20,
                    left: 0,
                    opacity: ".3",
                  },
                }}
              >
                Email:{" "}
                <span
                  style={{
                    fontWeight: "400",
                    color: "#20c997",
                  }}
                >
                  {" "}
                  chat@simone.com
                </span>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#FFF",
                  my: 5,
                  fontWeight: "bold",
                  fontSize: "20px",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    width: "300px",
                    height: "1px",
                    background: "#fff",
                    position: "absolute",
                    bottom: -20,
                    left: 0,
                    opacity: ".3",
                  },
                }}
              >
                Age:{" "}
                <span
                  style={{
                    fontWeight: "400",
                  }}
                >
                  {" "}
                  28
                </span>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#FFF",
                  my: 5,
                  fontWeight: "bold",
                  fontSize: "20px",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    width: "300px",
                    height: "1px",
                    background: "#fff",
                    position: "absolute",
                    bottom: -20,
                    left: 0,
                    opacity: ".3",
                  },
                }}
              >
                From:{" "}
                <span
                  style={{
                    fontWeight: "400",
                  }}
                >
                  {" "}
                  Los Angeles, California
                </span>
              </Typography>
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
                Download CV
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ fontSize: "60px", color: "hsla(0,0%,100%,.5)" }}>10+</Typography>
            <Typography sx={{ color: "#fff" }}>Years Experiance</Typography>
          </Box>
          <Divider sx={{ background: "#e0dede", opacity: ".3", width: "1px", height: "200px" }} />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ fontSize: "60px", color: "hsla(0,0%,100%,.5)" }}>10+</Typography>
            <Typography sx={{ color: "#fff" }}>Years Experiance</Typography>
          </Box>
          <Divider sx={{ background: "#e0dede", opacity: ".3", width: "1px", height: "200px" }} />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ fontSize: "60px", color: "hsla(0,0%,100%,.5)" }}>10+</Typography>
            <Typography sx={{ color: "#fff" }}>Years Experiance</Typography>
          </Box>
          <Divider sx={{ background: "#e0dede", opacity: ".3", width: "1px", height: "200px" }} />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ fontSize: "60px", color: "hsla(0,0%,100%,.5)" }}>10+</Typography>
            <Typography sx={{ color: "#fff" }}>Years Experiance</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
