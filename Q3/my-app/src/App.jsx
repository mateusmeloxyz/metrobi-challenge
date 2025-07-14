import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Content from "./components/Content";
import RelatedContent from "./components/RelatedContent";
import Footer from "./components/Footer";

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
        <Layout>
          <Header />
          <Content />
          <RelatedContent />
          <Footer />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
