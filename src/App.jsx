import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"
import "./app.css"

function App() {

  return (
    <UserContextProvider>
      <h2>React useContext API Basic</h2>
      <Login/>
      <Profile />
    </UserContextProvider>
  )
}

export default App
