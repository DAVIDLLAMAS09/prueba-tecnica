import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

// componentes

import ContentHome  from './components/ContentHome.jsx'
import Menu from './components/Menu.jsx'
import Footer from './components/Footer.jsx'


function App() {
  return (
    <>
    <Menu />
      <ContentHome />
    <Footer />
    </>
  );
}

export default App;
