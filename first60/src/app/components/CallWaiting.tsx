
'use client';
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Loader2, Clock, Users } from 'lucide-react';

const CallWaiting = ({ onNext, onBack, userData }) => {
  const [waitTime, setWaitTime] = useState(15); // 15 seconds wait time
  const [isWaiting, setIsWaiting] = useState(true);
  const [matchFound, setMatchFound] = useState(false);

  useEffect(() => {
    if (isWaiting && waitTime > 0) {
      const timer = setInterval(() => {
        setWaitTime(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (waitTime === 0) {
      // Simulate finding a match
      setMatchFound(true);
      setIsWaiting(false);
    }
  }, [isWaiting, waitTime]);

  const handleSkipMatch = () => {
    // Reset for a new match search
    setWaitTime(15);
    setIsWaiting(true);
    setMatchFound(false);
  };

  const handleStartCall = () => {
    onNext();
  };

  if (isWaiting) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-mint-100 via-white to-coral-100">
        <div className="max-w-2xl w-full text-center space-y-8">
          <div className="relative">
            <div className="bg-gradient-to-r from-mint-400 to-coral-400 rounded-full w-32 h-32 mx-auto flex items-center justify-center">
              <Loader2 className="h-16 w-16 text-white animate-spin" />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-gray-800">
              Finding your perfect match...
            </h2>
            <p className="text-xl text-gray-600">
              We're searching for someone who shares your interests
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Clock className="h-6 w-6 text-mint-600" />
              <span className="text-2xl font-semibold text-gray-800">
                {waitTime}s
              </span>
            </div>
            <p className="text-gray-600">
              Average wait time: 10-20 seconds
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Users className="h-5 w-5" />
              <span>Matching based on your interests</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {userData.interests.slice(0, 3).map((interest, index) => (
                <span key={index} className="text-sm bg-mint-100 text-mint-700 px-3 py-1 rounded-full">
                  {interest.replace('-', ' ')}
                </span>
              ))}
            </div>
          </div>

          <Button
            onClick={onBack}
            variant="outline"
            className="px-8 py-4 text-lg rounded-xl"
          >
            Cancel Search
          </Button>
        </div>
      </div>
    );
  }

  if (matchFound) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-coral-100 via-white to-purple-100">
        <div className="max-w-2xl w-full text-center space-y-8">
          <div className="space-y-4">
            <div className="text-6xl">🎉</div>
            <h2 className="text-4xl font-bold text-gray-800">
              Match Found!
            </h2>
            <p className="text-xl text-gray-600">
              We found someone perfect for you
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg">
            <div className="flex items-center space-x-6">
              <div className="bg-gradient-to-r from-coral-400 to-purple-400 rounded-full w-24 h-24 flex items-center justify-center">
                <span className="text-white font-bold text-3xl">J</span>
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-800 text-2xl">Jordan</div>
                <div className="text-gray-600 text-lg">Ready to chat • Online now</div>
                <div className="flex items-center space-x-2 mt-3">
                  <span className="text-sm bg-mint-100 text-mint-700 px-3 py-1 rounded-full">Digital Art</span>
                  <span className="text-sm bg-coral-100 text-coral-700 px-3 py-1 rounded-full">Startups</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-4 mt-6">
              <p className="text-gray-600 italic">
                "Ask me about the startup I'm building or my latest digital art projects!"
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <Button
              onClick={handleStartCall}
              className="bg-gradient-to-r from-coral-500 to-purple-500 hover:from-coral-600 hover:to-purple-600 text-white font-semibold py-6 px-12 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start 1-Minute Call
            </Button>
            
            <Button
              onClick={handleSkipMatch}
              variant="outline"
              className="px-8 py-4 text-lg rounded-xl"
            >
              Find Different Match
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default CallWaiting;
