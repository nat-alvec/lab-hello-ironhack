import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';

import NavBar from "./NavBar"
import TextPage from "./TextPage";
import TextWithIcons from "./TextWithIcons";
import Background from "./Background";

function App() {
  return (

    <div className="container">
      
      <header className="App-header">
       <NavBar/>
       <TextPage/>
       <Background/>
      </header>

      <body>
      <TextWithIcons/>
      </body>

    </div>
  );
}

export default App;
