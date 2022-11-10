// NPM dependencies
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Local dependencies
import Layout from "./components/Common/Layout";
import RuleForm from "./components/RuleForm/RuleForm";
import { ThemeProvider } from "./ThemeContext";
import RuleList from "./components/RuleList/RuleList";
import data from "./data/data.json";

function App() {
  const [rules, setRules] = useState();

  useEffect(() => {
    setRules(data);
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route
              exact
              path="/"
              element={<RuleList rules={rules} setRules={setRules} />}
            />
            <Route
              path="/new"
              element={<RuleForm rules={rules} setRules={setRules} />}
            />
            <Route
              path="/edit/:id"
              element={<RuleForm rules={rules} setRules={setRules} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
