import { UserPostContainer } from "./containers/userPost";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UserPostContainer
          firstName="Yurii"
          lastName="Khymchenko"
          middleName="Volodymyrovych"
          birthdayYear={1995}
          postText="This is my pattern for post text"
        />
      </header>
    </div>
  );
}

export default App;
