import { BrowserRouter as Router, Routes, Route,Outlet } from "react-router-dom";
import Destination from "./pages/Destination"
import Technology from "./pages/Technology"
import Crew from "./pages/Crew"
import Home from "./pages/Home"
import Navbar from "./components/Navbar";

function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  };
  return (
    <Router>
      <main className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/technology" element={<Technology />} />
          </Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
