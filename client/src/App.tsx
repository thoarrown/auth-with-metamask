import { AppBar, Toolbar, Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/globals.css";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Box display="flex" justifyContent="flex-end" width="100%">
            <UserProfile />
          </Box>
        </Toolbar>
      </AppBar>
      <Box width={500} m="auto" mt={2}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <div className="App">
                  <h1>Hello World!</h1>
                  <h2>Start project to see some magic happen!</h2>
                </div>
              }
            />
          </Routes>
        </Router>
      </Box>
    </>
  );
}

export default App;
