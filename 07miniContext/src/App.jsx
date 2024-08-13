
import './App.css'
import Login from './components/login/Login'
import Profile from './components/profile/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {


  return (
    <UserContextProvider>
     <h1>hello bhai o</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
