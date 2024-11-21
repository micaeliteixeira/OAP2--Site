import './App.css'

import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import Router from './router'

function App() {
  return (
    <>
      <Header />
      <div className="container-children">
        <Router />
      </div>
      <Footer />
    </>
  )
}

export default App
