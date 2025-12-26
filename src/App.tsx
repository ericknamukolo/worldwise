import { BrowserRouter, Route, Routes } from 'react-router';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import AppLayout from './pages/AppLayout';
// import PageNav from './components/PageNav';

function App() {
  const routes: {
    path: string;
    element: React.ReactNode;
  }[] = [
    { path: '/', element: <Home /> },
    { path: '/pricing', element: <Pricing /> },
    { path: '/product', element: <Product /> },
    { path: '/app', element: <AppLayout /> },
    { path: '*', element: <NotFound /> },
  ];
  return (
    <div>
      {/* <PageNav /> */}

      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
