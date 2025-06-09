
import './App.css'

import { Outlet } from 'react-router';
import Navigation from './Component/Navbar/Navbar';
const App = () => {


  return (
    <div className="min-h-screen">
      <Navigation />
      <Outlet />
    </div>
  );
};

export default App;