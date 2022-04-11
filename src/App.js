import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import 'antd/dist/antd.css'
import Layout from './components/Layout/Layout'
import Details from './pages/Details'

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details' element={<Details />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
