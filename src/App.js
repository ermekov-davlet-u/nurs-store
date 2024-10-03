import './App.css';
import MainPage from './pages/index';
import { Provider } from "react-redux";
import { store } from './redux/store';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainPage />
      </div>
    </Provider>
  );
}

export default App;
