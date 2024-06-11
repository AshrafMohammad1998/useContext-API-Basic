import React, {useState} from "react"
import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContext from "./context/UserContext"
import "./app.css"

function App() {
  const [user, setUser] = React.useState(null)
  return (
    <UserContext.Provider value={{user, setUser}}>
      <h2>React useContext API Basic</h2>
      <Login/>
      <Profile />
    </UserContext.Provider>
  )
}

export default App
