import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import SignOut from './pages/SignOut';
import Profile from './pages/profile';
import About from './pages/About';

export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sign-in" element={<Signin />} />
    <Route path="/sign-up" element={<SignOut />} /> 
    <Route path="/profile" element={<Profile/>} />
    <Route path="/about" element={<About />} />

  </Routes>
  </BrowserRouter>
}
