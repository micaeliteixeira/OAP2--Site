import { BrowserRouter, Route, Routes } from 'react-router-dom'

import AboutUs from '../page/AboutUs'
import Blog from '../page/Blog'
import Contact from '../page/Contact'
import Home from '../page/Home'
import Recipe from '../page/Recipe'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
