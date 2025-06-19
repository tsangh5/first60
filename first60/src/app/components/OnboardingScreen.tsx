
import React from 'react';
import { Button } from './ui/button';
import { Sparkles, Users, Clock } from 'lucide-react';

const OnboardingScreen = ({ onNext }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-mint-100 via-white to-coral-100">
      <div className="max-w-2xl w-full text-center space-y-8 animate-fade-in">
        {/* Logo */}
        <div className="flex items-center justify-center space-x-3 mb-12">
          <div className="bg-gradient-to-r from-mint-400 to-coral-400 rounded-full p-4">
            <Sparkles className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-mint-600 to-coral-600 bg-clip-text text-transparent">
            First60
          </h1>
        </div>

        {/* Welcome message */}
        <div className="space-y-6">
          <h2 className="text-4xl font-semibold text-gray-800">
            Make meaningful connections in just 60 seconds
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-xl mx-auto">
            Connect with new friends who share your interests through quick, authentic conversations. 
            Perfect for students and anyone looking to build genuine friendships.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-6 max-w-lg mx-auto">
          <div className="flex items-center space-x-4 bg-white/70 rounded-xl p-6 backdrop-blur-sm">
            <div className="bg-mint-100 rounded-full p-3">
              <Users className="h-8 w-8 text-mint-600" />
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-800">Interest-based matching</div>
              <div className="text-sm text-gray-600">3-5 matches daily</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 bg-white/70 rounded-xl p-6 backdrop-blur-sm">
            <div className="bg-coral-100 rounded-full p-3">
              <Clock className="h-8 w-8 text-coral-600" />
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-800">1-minute conversations</div>
              <div className="text-sm text-gray-600">Quick & meaningful</div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <Button 
          onClick={onNext}
          className="bg-gradient-to-r from-mint-500 to-coral-500 hover:from-mint-600 hover:to-coral-600 text-white font-semibold py-6 px-12 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Let's get started
        </Button>

        <p className="text-lg text-gray-500 mt-6">
          Build friendships, not dates 💫
        </p>
      </div>
    </div>
  );
};

export default OnboardingScreen;
