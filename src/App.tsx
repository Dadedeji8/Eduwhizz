import './App.css'
import { Outlet } from 'react-router';
import Footer from './components/ui/Footer';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;