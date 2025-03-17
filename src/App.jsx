import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import  Home  from "./pages/home.jsx";
import  Main  from "./components/layout/main.jsx";
import Add from './pages/add.jsx';

function App() {

  

	return (
		<div >
		<Router>
      
		
      <Routes>
			
			<Route  element={<Main/>}>
          <Route path='/' element={<Home/>}></Route> 
          <Route path='add' element={<Add/>}></Route> 

      </Route>

      </Routes>
    </Router>
		</div>
	)
}

export default App
