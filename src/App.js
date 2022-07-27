import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./pages/navigation/Navigation";
import SignIn from "./pages/sign-in/SignIn";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
