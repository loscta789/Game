import { Content } from './components/DefaultPage/Content'
import { Header2 } from './components/DefaultPage/Header2'
import { Header } from './components/DefaultPage/Header'
import { LogInPage } from './components/LogInPage/LogInPage'
import { SignUpPage } from './components/SignUpPage/SignUpPage'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Nécessite un import CSS
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { RanksHeader } from './components/RanksPage/RanksHeader'



function App() {

  return (
    <div>
      <Router>
      <Header2></Header2>

        <Routes>
          <Route exact path="/" element={<Header2/>} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/logIn" element={<LogInPage />} />

        </Routes>
      </Router>
    </div>


  )
}

export default App
