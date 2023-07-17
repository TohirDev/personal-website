import { Box, Typography } from "@mui/material";
export const Resume = () => {
  return (
    <Box
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
        py: 10,
      }}
      id="resume"
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
              content: '"SUMMARY"',
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
          Resume
        </Typography>

        <Box
          sx={{
            mt: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: {
              md: "row",
              xs: "column",
            },
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
            <Typography variant="h4" sx={{ color: "#fff", fontWeight: "bold" }}>
              My Education
            </Typography>
            <Box
              sx={{
                borderRadius: "10px",
                background: "#111418",
                maxWidth: {
                  md: "500px",
                  xs: "300px",
                },
                padding: "20px",
                mt: 5,
              }}
            >
              <span
                style={{
                  backgroundColor: "#20c997",
                  padding: "4px",
                  borderRadius: "5px",
                  color: "#fff",
                }}
              >
                2000 - 2004
              </span>
              <Typography variant="h5" sx={{ color: "#fff", my: 3 }}>
                Computer Science
              </Typography>
              <Typography sx={{ color: "#20c997" }}>International University</Typography>
              <Typography
                sx={{ mt: 2, color: "rgba(225,225,225,.4)", fontSize: "18px", width: "80%" }}
              >
                Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent
                possim iriure.
              </Typography>
            </Box>
            <Box
              sx={{
                borderRadius: "10px",
                background: "#111418",
                maxWidth: {
                  md: "500px",
                  xs: "300px",
                },
                padding: "20px",
                mt: 5,
              }}
            >
              <span
                style={{
                  backgroundColor: "#20c997",
                  padding: "4px",
                  borderRadius: "5px",
                  color: "#fff",
                }}
              >
                2000 - 2004
              </span>
              <Typography variant="h5" sx={{ color: "#fff", my: 3 }}>
                Computer Science
              </Typography>
              <Typography sx={{ color: "#20c997" }}>International University</Typography>
              <Typography
                sx={{ mt: 2, color: "rgba(225,225,225,.4)", fontSize: "18px", width: "80%" }}
              >
                Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent
                possim iriure.
              </Typography>
            </Box>
            <Box
              sx={{
                borderRadius: "10px",
                background: "#111418",
                maxWidth: {
                  md: "500px",
                  xs: "300px",
                },
                padding: "20px",
                mt: 5,
              }}
            >
              <span
                style={{
                  backgroundColor: "#20c997",
                  padding: "4px",
                  borderRadius: "5px",
                  color: "#fff",
                }}
              >
                2000 - 2004
              </span>
              <Typography variant="h5" sx={{ color: "#fff", my: 3 }}>
                Computer Science
              </Typography>
              <Typography sx={{ color: "#20c997" }}>International University</Typography>
              <Typography
                sx={{ mt: 2, color: "rgba(225,225,225,.4)", fontSize: "18px", width: "80%" }}
              >
                Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent
                possim iriure.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "#fff",
                fontWeight: "bold",
                mt: {
                  md: 0,
                  xs: 5,
                },
              }}
            >
              My Experience
            </Typography>
            <Box
              sx={{
                borderRadius: "10px",
                background: "#111418",
                maxWidth: {
                  md: "500px",
                  xs: "300px",
                },
                padding: "20px",
                mt: 5,
              }}
            >
              <span
                style={{
                  backgroundColor: "#20c997",
                  padding: "4px",
                  borderRadius: "5px",
                  color: "#fff",
                }}
              >
                2000 - 2004
              </span>
              <Typography variant="h5" sx={{ color: "#fff", my: 3 }}>
                Computer Science
              </Typography>
              <Typography sx={{ color: "#20c997" }}>International University</Typography>
              <Typography
                sx={{ mt: 2, color: "rgba(225,225,225,.4)", fontSize: "18px", width: "80%" }}
              >
                Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent
                possim iriure.
              </Typography>
            </Box>
            <Box
              sx={{
                borderRadius: "10px",
                background: "#111418",
                maxWidth: {
                  md: "500px",
                  xs: "300px",
                },
                padding: "20px",
                mt: 5,
              }}
            >
              <span
                style={{
                  backgroundColor: "#20c997",
                  padding: "4px",
                  borderRadius: "5px",
                  color: "#fff",
                }}
              >
                2000 - 2004
              </span>
              <Typography variant="h5" sx={{ color: "#fff", my: 3 }}>
                Computer Science
              </Typography>
              <Typography sx={{ color: "#20c997" }}>International University</Typography>
              <Typography
                sx={{ mt: 2, color: "rgba(225,225,225,.4)", fontSize: "18px", width: "80%" }}
              >
                Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent
                possim iriure.
              </Typography>
            </Box>
            <Box
              sx={{
                borderRadius: "10px",
                background: "#111418",
                maxWidth: {
                  md: "500px",
                  xs: "300px",
                },
                padding: "20px",
                mt: 5,
              }}
            >
              <span
                style={{
                  backgroundColor: "#20c997",
                  padding: "4px",
                  borderRadius: "5px",
                  color: "#fff",
                }}
              >
                2000 - 2004
              </span>
              <Typography variant="h5" sx={{ color: "#fff", my: 3 }}>
                Computer Science
              </Typography>
              <Typography sx={{ color: "#20c997" }}>International University</Typography>
              <Typography
                sx={{ mt: 2, color: "rgba(225,225,225,.4)", fontSize: "18px", width: "80%" }}
              >
                Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent
                possim iriure.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
