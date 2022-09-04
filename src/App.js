import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Offers from './Components/Pages/Offers';
import Profile from './Components/Pages/Profile';
import Signin from './Components/Pages/Signin';
import CreateListing from './Components/Pages/CreateListing';
import Signup from './Components/Pages/Signup';
import Password from './Components/Pages/Password';
import Category from './Components/Category';
import EditListing from './Components/Pages/EditListing'
import Explore from './Components/Pages/Explore';
import Navbar from './Components/Navbar';
import Listing from './Components/Pages/Listing';
import PrivateRoute from './Components/PrivateRoute'
import ForgotPass from './Components/Pages/ForgotPass'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'




function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path= '/' element ={<Explore />} />
            <Route path= '/Offers' element ={<Offers />} />
            <Route path='/category/:categoryName' element={<Category />} />
            <Route path='/profile' element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile />} />
          </Route>
            <Route path= '/Sign-in' element ={<Signin />} />
            <Route path= '/Sign-up' element ={<Signup />} />
            <Route path= '/CreateListing' element ={<CreateListing />} />
            <Route path= '/EditListing' element ={<EditListing />} />
            <Route path='/ForgotPass' element={<ForgotPass />} />
            <Route path= '/Password' element ={<Password />} />
            <Route path='/category/:categoryName/:Listingid' element={<Listing />} />
        </Routes>
        <Navbar />

      </Router>
      <ToastContainer />
    
    </>
  );
}

export default App;
