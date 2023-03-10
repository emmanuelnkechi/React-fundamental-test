import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageOne from "./pages/page-one";
import PageTwo from "./pages/page-two";
import ThemeProvider from "./context/themeContext";
import ContentProvider from "./context/contentContext";
import "./assets/styles/theme.css";

function App() {
  return (
    <div className="App">
      <ContentProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<PageOne />} />
              <Route path="/page-2" element={<PageTwo />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </ContentProvider>
    </div>
  );
}

export default App;
