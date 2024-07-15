import React, { useState } from "react";
import './App.css';
import ChatList from './component/ChatList';
import ChatWindow from './component/ChatWindow';

function App() {
  const [selectedChat, setSelectedChat] = useState(null);
  return (
    <div className="App">
    <div className='telegram'>
    <ChatList onSelectChat={setSelectedChat} />
    <ChatWindow selectedChat={selectedChat} />
    </div>
      
    </div>
  );
}

export default App;