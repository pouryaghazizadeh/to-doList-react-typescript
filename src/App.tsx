import {GlobalStyle} from "./GlobalStyle"
import InputField from "./components/form/index"
const App:React.FC =()=> {
  return (
    <div className="App">
      <span className="title">TASKIFY</span>
<InputField/>
<GlobalStyle/>
    </div>
  );
}

export default App;
