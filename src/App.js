import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ApprovalPage from './pages/ApprovalPage';
import Dashboard from './pages/Dashboard';
import Lockscreen from './pages/Lockscreen';
import LoginPage from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import SignUpPage from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/lock" element={<Lockscreen />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/approval" element={<ApprovalPage />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
