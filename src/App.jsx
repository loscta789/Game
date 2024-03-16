import { Content } from './components/DefaultPage/Content'
import { Header2 } from './components/DefaultPage/Header2'
import { Header } from './components/DefaultPage/Header'
import { LogInPage } from './components/LogInPage/LogInPage'
import { SignUpPage } from './components/SignUpPage/SignUpPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RanksHeader } from './components/RanksPage/RanksHeader'



function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Header2/>} />
          <Route path="/signUpPage" element={<SignUpPage />} />
          <Route path="/logInPage" element={<LogInPage />} />
          <Route path="/rankPage" element={<RanksHeader />} />
          {/* <Route path="/forumPage" element={<LogInPage />} /> */}
          {/* <Route path="/eventsPage" element={<LogInPage />} /> */}
          {/* <Route path="/donatePage" element={<DonatePage />} /> */}
          {/* <Route path="/supportPage" element={<supportPage />} /> */}
          {/* <Route path="/youtubePage" element={<youtubePage />} /> */}
          


          
          {/* <Route path="/eventsPage" element={<SignUpPage/>} /> */}

        </Routes>
      </Router>
    </div>


  )
}

export default App
