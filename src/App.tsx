import { FC } from "react";
import { Routes, Route } from "react-router-dom";
// components
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";

const App: FC = () => (
  <div>
    <Routes>
      <Route path="/" element={<FirstPage />} />
      <Route path="user">
        <Route path=":login" element={<SecondPage />} />
      </Route>
    </Routes>
  </div>
);

export default App;
