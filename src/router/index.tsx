import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Blog from '../page/Blog'
import Home from '../page/Home'
import Recipe from '../page/Recipe'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
