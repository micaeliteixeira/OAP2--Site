import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Blog from '../page/Blog'
import Home from '../page/Home'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
