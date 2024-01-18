import './App.css'
import Header from "./components/Header/Header";
import SideMenu from './components/SideMenu/SideMenu';
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className='app-container'>
      <Header />
      <SideMenu />
      <Dashboard />
      <Footer />
    </div>
  )
}

export default App
