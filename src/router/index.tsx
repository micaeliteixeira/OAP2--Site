import { BrowserRouter, Route, Routes } from 'react-router-dom'

import AboutUs from '../page/AboutUs'
import Blog from '../page/Blog'
import BlogContent from '../page/BlogContent'
import Contact from '../page/Contact'
import Home from '../page/Home'
import Recipe from '../page/Recipe'

const Router = () => {
  return (
    <BrowserRouter future={{ v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog/:id" element={<BlogContent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
