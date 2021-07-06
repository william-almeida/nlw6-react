import { BrowserRouter, Route } from "react-router-dom"
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom"

function App() {
  return (
    <BrowserRouter>
      <Route path="/newroom" component={NewRoom}/>
      <Route path="/" component={Home}/>
    </BrowserRouter>
  );
}

export default App;
