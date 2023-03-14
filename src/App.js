import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Menu from './components/layout/Menu'
import Container from './components/layout/Container'
import Footer from './components/layout/Footer'

import Cart from './components/pages/Cart';
import Products from './components/pages/Products';

function App() {
  return (
    <Router>
      <Menu />
      <Container customClass='min-height'>
        <Routes>
          <Route exact path='/' element={<Cart />}>
          </Route>
          <Route path='/products' element={<Products />}>
          </Route>
        </Routes>
      </Container>
      <Footer />
    </Router>
      
  );
}

export default App;
