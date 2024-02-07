import "../App.css";

import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "../components/Header/Header";
import SideMenu from "../components/SideMenu/SideMenu";
import Dashboard from "../components/Dashboard/Dashboard";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

import TaskPage from "../components/TaskPage/TaskPage";

function App() {
  return (
    <Provider store={store}>
      <div className="app-container">
        <Header />
        <NavBar />

        <Router>
          <Routes>
            <Route path="/" exact={<Dashboard />} />
            <Route path="/taskpage" element={<TaskPage />} />
          </Routes>
          <SideMenu />
        </Router>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
