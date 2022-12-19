import React from 'react'
import App from './Routes/App'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Create from './Routes/Create'
import Join from './Routes/Join'
import Search from './Routes/Search'


const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='' element={<App/>}></Route>
            <Route path='create' element={<Create />}></Route>
            <Route path='search' element={<Search />}></Route>
            <Route path='join' element={<Join />}></Route>
            <Route path='*' element={<main>ERROR 404</main>}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default AppRouter