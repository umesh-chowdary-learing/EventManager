import homePage from "./pages/homePage";
import {  Route, Routes } from 'react-router-dom';
import HeaderCmp from "./components/headerCmp";
import EventManagerPage from "./pages/EventManagerPage";
function App() {
  
 
  return (
    <>
    <HeaderCmp>
    <Routes>
      <Route path='/' exact Component={EventManagerPage}/>
      <Route path="/eventManagerPage" Component={EventManagerPage}/>
      <Route path="/eventManagerPage" Component={EventManagerPage}/>
    </Routes>
    </HeaderCmp>
    
</>
    
  );
}

export default App;







