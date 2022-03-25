import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginView from './components/views/LoginView.jsx';
import TranslationView from './components/views/TranslationView.jsx';
import ProfileView from './components/views/ProfileView.jsx';
import NotFoundView from './components/views/NotFoundView.jsx';

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginView/>}/>
            <Route path="/translation" element={<TranslationView/>}/>
            <Route path="/profile" element={<ProfileView/>}/>
            <Route path="*" element={<NotFoundView/>}/>
          </Routes>
      </BrowserRouter>
      
  );
}

export default App;
