
import React from 'react';
import { Button } from './ui/button';
import { Heart, MessageCircle, SkipForward, Sparkles, Star } from 'lucide-react';

const PostCallScreen = ({ onBack, userData, updateUserData }) => {
  const handleAction = (action) => {
    console.log(`User chose: ${action}`);
    
    // Increment daily matches used
    const newDailyMatches = userData.dailyMatches + 1;
    updateUserData({ dailyMatches: newDailyMatches });
    
    // Here you would typically handle the action and navigate appropriately
    // For now, we'll just log it and go back to daily spark
    setTimeout(() => {
      onBack();
    }, 1000);
  };

  const remainingMatches = userData.maxDailyMatches - userData.dailyMatches - 1; // -1 because this match is about to be counted

  return (
    <div className="min-h-screen flex flex-col p-6 bg-gradient-to-br from-mint-100 via-white to-coral-100">
      <div className="max-w-2xl mx-auto w-full">
        {/* Header */}
        <div className="text-center pt-12 mb-8">
          <div className="bg-gradient-to-r from-mint-400 to-coral-400 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
            <Sparkles className="h-12 w-12 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Great conversation!
          </h2>
          <p className="text-xl text-gray-600">
            How did it go with Jordan?
          </p>
        </div>

        {/* Daily matches remaining */}
        <div className="bg-purple-50 rounded-2xl p-6 mb-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Star className="h-5 w-5 text-purple-500" />
            <span className="font-semibold text-purple-700">
              {remainingMatches} matches remaining today
            </span>
          </div>
          <p className="text-sm text-purple-600">
            {remainingMatches === 0 ? 'This was your last match for today!' : 'Make them count!'}
          </p>
        </div>

        {/* Participant recap */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-gray-100">
          <div className="flex items-center space-x-6 mb-6">
            <div className="bg-gradient-to-r from-coral-400 to-purple-400 rounded-full w-20 h-20 flex items-center justify-center">
              <span className="text-white font-bold text-2xl">J</span>
            </div>
            <div>
              <div className="font-bold text-gray-800 text-2xl">Jordan</div>
              <div className="text-gray-600 text-lg">Just finished call</div>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-sm bg-mint-100 text-mint-700 px-3 py-1 rounded-full">Digital Art</span>
                <span className="text-sm bg-coral-100 text-coral-700 px-3 py-1 rounded-full">Startups</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-gray-600 italic">
              "Ask me about the startup I'm building or my latest digital art projects!"
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="space-y-4 mb-8">
          <Button
            onClick={() => handleAction('connect')}
            className="w-full bg-gradient-to-r from-mint-500 to-mint-600 hover:from-mint-600 hover:to-mint-700 text-white py-6 rounded-2xl text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Heart className="h-6 w-6 mr-3" />
            Connect
          </Button>

          <Button
            onClick={() => handleAction('chat')}
            className="w-full bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-600 hover:to-coral-700 text-white py-6 rounded-2xl text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <MessageCircle className="h-6 w-6 mr-3" />
            Start chatting
          </Button>

          <Button
            onClick={() => handleAction('pass')}
            variant="outline"
            className="w-full border-2 border-gray-200 text-gray-600 hover:bg-gray-50 py-6 rounded-2xl text-xl font-semibold"
          >
            <SkipForward className="h-6 w-6 mr-3" />
            Pass
          </Button>
        </div>

        {/* Next spark CTA */}
        <div className="text-center space-y-4">
          {remainingMatches > 0 ? (
            <div className="bg-purple-50 rounded-xl p-6">
              <p className="text-lg text-purple-700 font-medium">
                Ready for another spark? 
              </p>
              <p className="text-purple-600 mt-1">
                {remainingMatches} matches left today
              </p>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-lg text-gray-700 font-medium">
                All matches used for today!
              </p>
              <p className="text-gray-600 mt-1">
                Come back tomorrow for more connections
              </p>
            </div>
          )}
          
          <Button
            onClick={onBack}
            variant="ghost"
            className="text-gray-500 hover:text-gray-700 text-lg"
          >
            Return to Daily Spark
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostCallScreen;
