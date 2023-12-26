import "./App.css";
import Form from "./components/Form";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="app-title">CYLINDER SOLENOID ENGINE</h1>
      </header>
      <div className="form-container">
        <Form />
      </div>
      <div className="user-list-container">
        <UserList />
      </div>
    </div>
  );
}

export default App;

