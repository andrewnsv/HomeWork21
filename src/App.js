import "./App.css";
import FirstDiv from "./components/FirstDiv";
import MyProvider from "./provider/MyContext";

 function App() {
  
  return (
    <MyProvider >
      <FirstDiv/>
    </MyProvider>
  );
}

export default App