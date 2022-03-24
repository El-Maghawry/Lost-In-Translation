import './App.css';
import LoginView from './components/views/LoginView.jsx';
import AppContainer from "./components/hoc/AppContainer.jsx";
import Translation from "./Translation.jsx";

function App() {
  return (
    
      <AppContainer>
      <LoginView/>
      <Translation/>
      </AppContainer>
     

  );
}

export default App;
