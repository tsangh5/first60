
import React from 'react';
import { Button } from './ui/button';
import { Sparkles, Clock, Users, Star } from 'lucide-react';

const DailySpark = ({ onNext, onBack, userData }) => {
  const remainingMatches = userData.maxDailyMatches - userData.dailyMatches;
  const canMatch = remainingMatches > 0;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-purple-100 via-white to-mint-100">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Daily limit indicator */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg mb-8">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <Star className="h-6 w-6 text-purple-500" />
            <span className="text-lg font-semibold text-gray-800">Daily Matches</span>
          </div>
          <div className="text-3xl font-bold text-purple-600">
            {remainingMatches}/{userData.maxDailyMatches}
          </div>
          <div className="text-sm text-gray-600 mt-2">
            {remainingMatches > 0 ? 'matches remaining today' : 'Come back tomorrow for more matches!'}
          </div>
        </div>

        {canMatch ? (
          <>
            {/* Animated spark icon */}
            <div className="relative">
              <div className="bg-gradient-to-r from-purple-500 to-mint-500 rounded-full p-8 w-32 h-32 mx-auto flex items-center justify-center animate-pulse">
                <Sparkles className="h-16 w-16 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 bg-coral-500 rounded-full w-8 h-8 flex items-center justify-center">
                <span className="text-white text-sm font-bold">1</span>
              </div>
            </div>

            {/* Main message */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-mint-600 bg-clip-text text-transparent">
                Daily Spark
              </h2>
              <h3 className="text-3xl font-semibold text-gray-800">
                Ready for your 1-Minute Match?
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg mx-auto">
                We've found someone who shares your interests and is online now. 
                Take 60 seconds to spark a new friendship!
              </p>
            </div>

            {/* Match preview */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg">
              <div className="flex items-center space-x-6">
                <div className="bg-gradient-to-r from-coral-400 to-purple-400 rounded-full w-20 h-20 flex items-center justify-center">
                  <span className="text-white font-semibold text-2xl">A</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-800 text-xl">Alex</div>
                  <div className="text-gray-600">Online now</div>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="text-sm bg-mint-100 text-mint-700 px-3 py-1 rounded-full">Books</span>
                    <span className="text-sm bg-coral-100 text-coral-700 px-3 py-1 rounded-full">Startups</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Features reminder */}
            <div className="grid md:grid-cols-2 gap-4 max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <Clock className="h-5 w-5" />
                <span>60 seconds • Audio or Video</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <Users className="h-5 w-5" />
                <span>Choose to connect after</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="space-y-4">
              <Button
                onClick={onNext}
                className="bg-gradient-to-r from-purple-500 to-mint-500 hover:from-purple-600 hover:to-mint-600 text-white font-semibold py-6 px-12 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start my 1-Minute Match
              </Button>
              
              <Button
                onClick={onBack}
                variant="ghost"
                className="text-gray-600 hover:text-gray-800 text-lg"
              >
                Maybe later
              </Button>
            </div>
          </>
        ) : (
          <>
            {/* No matches left */}
            <div className="space-y-6">
              <div className="bg-gray-200 rounded-full p-8 w-32 h-32 mx-auto flex items-center justify-center">
                <Sparkles className="h-16 w-16 text-gray-400" />
              </div>
              <h2 className="text-4xl font-bold text-gray-600">
                All sparks used today!
              </h2>
              <p className="text-xl text-gray-500 max-w-lg mx-auto">
                You've used all your daily matches. Come back tomorrow for more connections, or upgrade for more daily matches!
              </p>
            </div>
            
            <Button
              onClick={onBack}
              variant="outline"
              className="px-8 py-4 text-lg rounded-xl"
            >
              Back to Profile
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default DailySpark;
