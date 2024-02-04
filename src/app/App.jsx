import "../App.css";

import { Provider } from "react-redux";
import store from "./store";

import Header from "../components/Header/Header";
import SideMenu from "../components/SideMenu/SideMenu";
import Dashboard from "../components/Dashboard/Dashboard";
import NavBar from "../components/NavBar/NavBar";

function App() {
  return (
    <Provider store={store}>
      <div className="app-container">
        <Header />
        <NavBar />
        <SideMenu />
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;
