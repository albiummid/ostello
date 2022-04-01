import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import 'antd/dist/antd.css'
import Layout from './components/Layout/Layout'

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
