import './App.css';
import WelcomePage from "./pages/01WelcomePage/WelcomePage"
import UserIdentification from './pages/02UserIdentification/UserIdentification';
import Questionaire from './pages/03Questionaire/Questionaire';
import Strategies from './pages/04Strategies/Strategies';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
function App() {
  return (

    <div className="App">


      <Router>
        {<Header/> }
        <Routes>
          <Route path="/" element ={<WelcomePage/>}/>
          <Route path="/UserIdentification" element={<UserIdentification/> }/>
          <Route path="/Questionaire" element={<Questionaire/>}/>
          <Route path="/Strategies" element={<Strategies/>}/>
        </Routes>
      </Router>

    </div>

    
  );
}

export default App;
