import "./App.css";
import Form from "./components/Form";
import UserList from "./components/UserList";
function App() {
  return (
    <div className="App">
      <header>
        <h1>CYLINDER SOLENOID ENGINE</h1>
{/*         <Form />
        <UserList /> */}
      </header>
      <div className="form-container">
            <Form />
            <UserList />
      </div>
    </div>
  );
}

export default App;
