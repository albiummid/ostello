import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import 'antd/dist/antd.css'
import Layout from './components/Layout/Layout'
import Details from './pages/Details'
import Institute from './pages/Institute'
import ViewMoreCourse from './pages/ViewMoreCourse'

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/institute/:instituteId' element={<Institute />} />
            <Route path='/details' element={<Details />} />
            <Route path='/viewMoreCourse' element={<ViewMoreCourse />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
