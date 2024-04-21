
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';

import UserSignup from './components/UserSignup';
import UserLogin from './components/UserLogin';

import Dashboard from './components/Dashboard';

import CreateExercise from './components/CreateExercise';
import ReadExercise from './components/ReadExercise';
import UpdateExercise from './components/UpdateExercise';
import DeleteExercise from './components/DeleteExercise';

function App() {
  return (
    <>
      <Router>
        <div>
          <Navigation/>
          <Routes>

            <Route path="/" />

            <Route path="/createexercise" element={< CreateExercise />} />
            <Route path="/readeexercise" element={< ReadExercise />} />
            <Route path="/updateexercise" element={< UpdateExercise />} />
            <Route path="/deleteexercise" element={< DeleteExercise />} />

            <Route path="/dashboard" element={< Dashboard />} />

            <Route path="/signup" element={< UserSignup />} />
            <Route path="/login" element={< UserLogin />} />

          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
