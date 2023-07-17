const { Box, Typography } = require("@mui/material");

export const Footer = () => {
  return (
    <Box
      sx={{
        width: {
          md: "85%",
          xs: "100%",
        },
        marginLeft: "auto",
        background: "#343a40",
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "50px 20px",
          margin: "0 auto",
          color: "rgba(225,225,225,.6)",
          flexDirection: {
            md: "row",
            xs: "column",
          },
        }}
      >
        <Typography sx={{ fontSize: { md: "20px", xs: "16px" }, width: "100%" }}>
          Copyright © 2023 Simone. All Rights Reserved.
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            mt: { md: 0, xs: 4 },
            justifyContent: {
              md: "end",
              xs: "center",
            },
          }}
        >
          <Typography variant="h6" sx={{ fontSize: { md: "20px", xs: "16px" }, mr: 4 }}>
            Terms & Policy
          </Typography>
          <Typography sx={{ fontSize: { md: "20px", xs: "16px" } }} variant="h6">
            Disclaimer
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
