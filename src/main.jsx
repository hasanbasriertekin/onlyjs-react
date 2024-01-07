import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './sections/navbar/navbar.jsx'
import Hero from './sections/hero/hero.jsx'
import Features from './sections/feature.jsx/feature.jsx'
import Footer from './sections/footer/footer.jsx'
import "../node_modules/bootstrap/dist/js/bootstrap.js"
import './style.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Navbar />
    <Hero />
    <Features />
    <Footer />
  </React.StrictMode>,
)
