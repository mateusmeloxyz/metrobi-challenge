import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Stack, Box, CssBaseline } from "@mui/material";

const theme = createTheme({
  components: {
    MuiStack: {
      defaultProps: {
        useFlexGap: true,
      },
    },
  },
});

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            width: "100%",
            height: "100vh",
          }}
        >
          <Stack
            sx={{
              height: "100%",
              width: "100%",
              alignItems: "stretch",
              gap: 2,
            }}
          >
            <Box bgcolor="#54D4EB" sx={{ flexGrow: 1 }}>
              Header
            </Box>
            <Box
              sx={{
                flexGrow: 7,
              }}
            >
              <Stack
                direction="row"
                sx={{
                  height: "100%",
                  width: "100%",
                  gap: 2,
                  alignItems: "stretch",
                }}
              >
                <Box sx={{ flexGrow: 1, flexBasis: 1 }}>
                  <Stack
                    sx={{
                      height: "100%",
                      gap: 2,
                      alignItems: "stretch",
                    }}
                  >
                    <Box bgcolor="#D7C9E3" sx={{ flexGrow: 1 }}>
                      Hero
                    </Box>
                    <Box bgcolor="#9FC363" sx={{ flexGrow: 2 }}>
                      Sidebar
                    </Box>
                  </Stack>
                </Box>
                <Box sx={{ flexGrow: 2, flexBasis: 2 }}>
                  <Stack
                    sx={{
                      height: "100%",
                      gap: 2,
                      alignItems: "stretch",
                    }}
                  >
                    <Box bgcolor="#F5C632" sx={{ flexGrow: 2 }}>
                      Main Content
                    </Box>
                    <Box bgcolor="#898989" sx={{ flexGrow: 1 }}>
                      Extra Content
                    </Box>
                  </Stack>
                </Box>
              </Stack>
            </Box>
            <Box sx={{ flexGrow: 2 }}>
              <Stack
                sx={{
                  height: "100%",
                  gap: 2,
                  alignItems: "stretch",
                  flexDirection: "row",
                }}
              >
                <Box bgcolor="#2AB676" sx={{ flexGrow: 2 }}>
                  Related Images
                </Box>
                <Box bgcolor="#F3CCDE" sx={{ flexGrow: 1 }}>
                  Related Posts
                </Box>
              </Stack>
            </Box>
            <Box bgcolor="#FEA500" sx={{ flexGrow: 1 }}>
              Footer
            </Box>
          </Stack>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
