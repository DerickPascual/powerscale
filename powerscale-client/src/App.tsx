import { Outlet } from 'react-router-dom';
import Header from './common/Header/Header';
import Navigation from './common/Navigation/Navigation';
import './App.css';

function App() {

  return (
    <div>
      <Header />
      <div className='flex'>
        <Navigation />
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default App
