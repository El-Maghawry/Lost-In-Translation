import './App.css';
import LoginView from './components/views/LoginView.jsx';

import AppContainer from "./components/hoc/AppContainer.jsx";

function App() {
  return (
    <div className="App">
      <AppContainer>
      <LoginView/>
      </AppContainer>
     
    </div>
  );
}

export default App;
