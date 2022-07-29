import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./pages/navigation/Navigation";
import Authentication from "./pages/authentication/Authentication";
import Shop from "./pages/shop/Shop";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
