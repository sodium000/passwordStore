
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from "./component/Navbar" 
import Footer from './component/footer.jsx'

createRoot(document.getElementById('root')).render(
  <>
     <Navbar/>
    <App />
    <Footer/>
  </>,
)
