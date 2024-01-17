
import Login from "./components/Login"
import Profile from "./components/Profile"
import Usercontextprovider from "./context/usercontextprovider"

function App() {
 

  return (
    <>
    <Usercontextprovider>
     <h1>hello</h1>
     <Login/>
     <Profile/>
    </Usercontextprovider>
    </>
  )
}

export default App
