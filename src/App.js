import "./styles.css";
import "antd/dist/antd.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";


export default function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} />  
        </Switch>    
      </BrowserRouter>
    </div>
  );
}
