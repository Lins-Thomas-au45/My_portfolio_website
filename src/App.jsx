import React from 'react'
import About from './components/about/About'
import Contacts from './components/contacts/Contacts'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Portfolio from './components/portfolio/Portfolio'
import Nav from './components/nav/Nav'

const App = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Portfolio/>
        <Contacts/>
        <Footer/>
    </>
  )
}

export default App