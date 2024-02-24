import '../App.css'
import { AppProvider } from "../context/AppContext";
//import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "../components/Header/Header";
import SideMenu from "../components/SideMenu/SideMenu";
import Dashboard from "../components/Dashboard/Dashboard";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Calender from "../components/Calendar/Calendar";
import TaskPage from "../components/TaskPage/TaskPage";

function App() {
	return (
		<AppProvider >
			<div className='app-container'>
				<Header />
				<NavBar />
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/taskpage" element={<TaskPage />} />

            <Route path="/calender" element={<Calender />} />
          </Routes>
          <SideMenu />
        </Router>
        <Footer />
      </div>
    </AppProvider>
  );

}

export default App
