import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import ContactPage from './pages/ContactPage';
import AdmissionsPage from './pages/AdmissionPage';
const App = () => {

  return (
  <div>
   < BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path='/courses' element={<CoursesPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/admission' element={<AdmissionsPage/>}/>
      </Routes> 
    </BrowserRouter>
  </div>
)
}

export default App;