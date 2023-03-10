import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageOne from "./pages/page-one";
import PageTwo from "./pages/page-two";
import ThemeProvider from "./context/themeContext";
import ContentProvider from "./context/contentContext";
import { routesConstant } from "./constants/routes-constant";
import NotFound from "./components/not-found";
import "./assets/styles/theme.css";

function App() {
  return (
    <div className="App">
      <ContentProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Routes>
              <Route path={routesConstant.GET_PAGE1} element={<PageOne />} />
              <Route path={routesConstant.GET_PAGE2} element={<PageTwo />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </ContentProvider>
    </div>
  );
}

export default App;
