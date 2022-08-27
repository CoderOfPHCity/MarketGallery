import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Offers from './Components/Pages/Offers';
import Profile from './Components/Pages/Profile';
import Signin from './Components/Pages/Signin';
import Signup from './Components/Pages/Signup';
import Password from './Components/Pages/Password';
import Explore from './Components/Pages/Explore';
import Navbar from './Components/Navbar';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'




function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path= '/' element ={<Explore />} />
            <Route path= '/Offers' element ={<Offers />} />
            <Route path= '/Profile' element ={<Profile />} />
            <Route path= '/Sign-in' element ={<Signin />} />
            <Route path= '/Sign-up' element ={<Signup />} />
            <Route path= '/Password' element ={<Password />} />
        </Routes>
        <Navbar />

      </Router>
      <ToastContainer />
    
    </>
  );
}

export default App;
