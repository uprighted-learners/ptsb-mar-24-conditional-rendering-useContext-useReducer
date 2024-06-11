import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LoginControl from './components/LoginControl'
import { MessageProvider } from './context/MessageContext'
import './App.css'

function Welcome() {
  return (
    <div>
      Welcome
    </div>
  )
}

function App() {

  return (
    <>
      <MessageProvider>
        <LoginControl />
      </MessageProvider>
      
      <Welcome />
    </>
  )
}

export default App
