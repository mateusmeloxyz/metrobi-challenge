import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Stack, Box, CssBaseline } from "@mui/material";
import ColorBox from "./components/ColorBox";

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
            <ColorBox bgcolor="#54D4EB" sx={{ flexGrow: 1 }} title="Header" />
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
                    <ColorBox
                      bgcolor="#D7C9E3"
                      sx={{ flexGrow: 1 }}
                      title="Hero"
                    />
                    <ColorBox
                      bgcolor="#9FC363"
                      sx={{ flexGrow: 2 }}
                      title="Sidebar"
                    />
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
                    <ColorBox
                      bgcolor="#F5C632"
                      sx={{ flexGrow: 2 }}
                      title="Main Content"
                    />
                    <ColorBox
                      bgcolor="#898989"
                      sx={{ flexGrow: 1 }}
                      title="Extra Content"
                    />
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
                <ColorBox
                  bgcolor="#2AB676"
                  sx={{ flexGrow: 2 }}
                  title="Related Images"
                />
                <ColorBox
                  bgcolor="#F3CCDE"
                  sx={{ flexGrow: 1 }}
                  title="Related Posts"
                />
              </Stack>
            </Box>
            <ColorBox bgcolor="#FEA500" sx={{ flexGrow: 1 }} title="Footer" />
          </Stack>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
