import {
    BrowserRouter,
    Routes,
    Route
  } from 'react-router-dom';
  import Layout from '../Components/Layout/layout';
import Home from '../Pages/Home';

  const Routing = () => {
    return (
      <BrowserRouter>
        <Routes>
        <Route element={<Layout />} >
          <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  

  export default Routing