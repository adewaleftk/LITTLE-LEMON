import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';
import './App.css';

function App() {
  return (
      <>
        <Nav />
        <BookingPage />
        <Header />
        <Main />
        <Footer />
      </>
  );
}

export default App;
