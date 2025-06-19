'use client';
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Mic, MicOff, SkipForward } from 'lucide-react';

const CallScreen = ({ onNext, onBack }) => {
  const [timeLeft, setTimeLeft] = useState(60);
  const [isMuted, setIsMuted] = useState(false);
  const [callStarted, setCallStarted] = useState(false);

  useEffect(() => {
    if (callStarted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      onNext();
    }
  }, [callStarted, timeLeft, onNext]);

  const startCall = () => {
    setCallStarted(true);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!callStarted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-coral-100 via-white to-purple-100">
        <div className="max-w-md w-full text-center space-y-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Connecting you with Alex...
          </h2>
          
          <div className="bg-gradient-to-r from-coral-400 to-purple-400 rounded-full w-32 h-32 mx-auto flex items-center justify-center animate-pulse">
            <span className="text-white font-bold text-3xl">A</span>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600">
              You're about to start a 1-minute conversation with someone who shares your interests in books and startups!
            </p>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4">
              <p className="text-sm text-gray-600 italic">
                "Ask me about the latest sci-fi novels I've been reading or my experience launching a small business!"
              </p>
            </div>
          </div>

          <Button
            onClick={startCall}
            className="w-full bg-gradient-to-r from-coral-500 to-purple-500 hover:from-coral-600 hover:to-purple-600 text-white font-semibold py-4 rounded-2xl text-lg"
          >
            Start Call
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-coral-500 to-purple-600 text-white">
      {/* Header with timer */}
      <div className="flex items-center justify-center pt-16 pb-8">
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-3">
          <div className="text-3xl font-bold font-mono">{formatTime(timeLeft)}</div>
          <div className="text-sm opacity-80">Time remaining</div>
        </div>
      </div>

      {/* Participant */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-full w-40 h-40 mx-auto flex items-center justify-center border-4 border-white/30">
            <span className="text-white font-bold text-5xl">A</span>
          </div>
          <div>
            <div className="text-xl font-semibold">Alex</div>
            <div className="text-white/80">Speaking...</div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="p-6 pb-12">
        <div className="flex justify-center space-x-6 mb-6">
          <Button
            onClick={() => setIsMuted(!isMuted)}
            className={`rounded-full w-16 h-16 ${isMuted ? 'bg-red-500 hover:bg-red-600' : 'bg-white/20 hover:bg-white/30'} backdrop-blur-sm border-2 border-white/30`}
          >
            {isMuted ? <MicOff className="h-6 w-6" /> : <Mic className="h-6 w-6" />}
          </Button>
          
          <Button
            onClick={onNext}
            className="rounded-full w-16 h-16 bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/30"
          >
            <SkipForward className="h-6 w-6" />
          </Button>
        </div>

        <div className="flex space-x-3">
          <Button
            onClick={onNext}
            className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white py-3 rounded-xl"
          >
            Continue Chat
          </Button>
          <Button
            onClick={onNext}
            variant="outline"
            className="flex-1 bg-white text-gray-800 hover:bg-gray-100 py-3 rounded-xl border-0"
          >
            Skip
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CallScreen;
