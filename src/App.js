import { Route, Routes } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import ProductDetail from './components/ProductDetail';
import Home from './pages/Home';
import { NotFound } from './pages/NotFound';
import ProductList from './pages/ProductList';

function App() {
  return (
    <ErrorBoundary>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/product' element={<ProductList />} />
      <Route path='/product/:productId' element={<ProductDetail />} />
    </Routes>
    </ErrorBoundary>
  );
}

export default App;