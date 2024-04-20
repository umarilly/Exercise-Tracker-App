
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import CreateUser from './components/CreateUser';
import CreateExercise from './components/CreateExercise';
import ReadExercise from './components/ReadExercise';
import UpdateExercise from './components/UpdateExercise';
import DeleteExercise from './components/DeleteExercise';

function App() {
  return (
    <>
      <Router>
        <div className='container' >
          <Navigation/>
          <Routes>
            <Route path="/" element={< CreateUser />} />
            <Route path="/createuser" element={< CreateUser />} />
            <Route path="/createexercise" element={< CreateExercise />} />
            <Route path="/readeexercise" element={< ReadExercise />} />
            <Route path="/updateexercise" element={< UpdateExercise />} />
            <Route path="/deleteexercise" element={< DeleteExercise />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
