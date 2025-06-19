'use client';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Mic, Phone, Send, Volume2 } from 'lucide-react';

const ChatScreen = ({ onNext, onBack }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'Alex',
      type: 'text',
      content: "Hey! Nice to match with you! I saw we both love books and startups 📚",
      timestamp: new Date()
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  const sendTextMessage = () => {
    if (newMessage.trim()) {
      setMessages(prev => [...prev, {
        id: Date.now(),
        sender: 'You',
        type: 'text',
        content: newMessage,
        timestamp: new Date()
      }]);
      setNewMessage('');
    }
  };

  const handleVoiceMessage = () => {
    setIsRecording(!isRecording);
    // Simulate voice message
    if (isRecording) {
      setMessages(prev => [...prev, {
        id: Date.now(),
        sender: 'You',
        type: 'voice',
        content: 'Voice message (3s)',
        timestamp: new Date()
      }]);
    }
  };

  const startCall = () => {
    onNext(); // Go to call screen
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-mint-50 via-white to-coral-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 p-4">
        <div className="max-w-4xl mx-auto flex items-center space-x-4">
          <div className="bg-gradient-to-r from-coral-400 to-purple-400 rounded-full w-12 h-12 flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <div className="flex-1">
            <div className="font-semibold text-gray-800 text-lg">Alex</div>
            <div className="text-sm text-green-600">Online now</div>
          </div>
          <Button
            onClick={startCall}
            className="bg-gradient-to-r from-mint-500 to-mint-600 hover:from-mint-600 hover:to-mint-700 text-white px-6 py-2 rounded-xl"
          >
            <Phone className="h-4 w-4 mr-2" />
            Start Call
          </Button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 max-w-4xl mx-auto w-full p-4 overflow-y-auto">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                  message.sender === 'You'
                    ? 'bg-gradient-to-r from-mint-500 to-mint-600 text-white'
                    : 'bg-white border border-gray-200 text-gray-800'
                }`}
              >
                {message.type === 'voice' ? (
                  <div className="flex items-center space-x-2">
                    <Volume2 className="h-4 w-4" />
                    <span className="text-sm">{message.content}</span>
                  </div>
                ) : (
                  <p>{message.content}</p>
                )}
                <div className={`text-xs mt-1 ${message.sender === 'You' ? 'text-mint-100' : 'text-gray-500'}`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input area */}
      <div className="bg-white/80 backdrop-blur-sm border-t border-gray-200 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="flex-1 relative">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendTextMessage()}
                placeholder="Type a message..."
                className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-mint-500 focus:border-transparent"
              />
            </div>
            
            <Button
              onClick={handleVoiceMessage}
              className={`p-3 rounded-full ${
                isRecording 
                  ? 'bg-red-500 hover:bg-red-600' 
                  : 'bg-coral-500 hover:bg-coral-600'
              } text-white`}
            >
              <Mic className="h-5 w-5" />
            </Button>
            
            <Button
              onClick={sendTextMessage}
              disabled={!newMessage.trim()}
              className="p-3 rounded-full bg-mint-500 hover:bg-mint-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="mt-3 text-center">
            <p className="text-sm text-gray-600">
              Send voice messages or start a 1-minute call when you're ready!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
