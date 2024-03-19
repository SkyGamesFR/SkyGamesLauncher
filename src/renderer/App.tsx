import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Auth from './components/pages/auth/auth';

function Hello() {
  return (
    <>

    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
}
