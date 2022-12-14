import { Container } from 'react-bootstrap';

import { Routes, Route } from 'react-router-dom';

import { Home } from './components/pages/Home/Home';
import { Categories } from './components/pages/Categories/Categories';
import { SinglePost } from './components/pages/SinglePost/SinglePost';
import { AddPost } from './components/pages/AddPost/AddPost';
import { EditPost } from './components/pages/EditPost/EditPost';
import { About } from './components/pages/About/About';
import { ErrorPage } from './components/pages/ErrorPage/ErrorPage';
import { Header } from './components/views/Header/Header';
import { Footer } from './components/views/Footer/Footer';
import { Category } from './components/pages/Category/Category';

export function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/post/:postId' element={<SinglePost />} />
        <Route path='/post/add' element={<AddPost />} />
        <Route path='/post/edit/:postId' element={<EditPost />} />
        <Route path='/about' element={<About />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/category/:category' element={<Category />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Container>
  );
}
