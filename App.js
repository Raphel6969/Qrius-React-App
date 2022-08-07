import MainApp from "./MyItems/MainApp"
import LogIn from "./MyItems/LogIn"
import {Link, Route, Routes} from "react-router-dom"

function App() {
  return (
    <>
    {/* <MainApp/> */}
    <Routes>
      <Route path="/" element={<MainApp/>}/>
      <Route path="/home" element={<MainApp/>}/>
      <Route path="login" element={<LogIn/>}/>
    </Routes>
    </>
  );
}

export default App;
