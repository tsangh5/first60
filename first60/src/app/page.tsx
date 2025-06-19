'use client';
import React, { useState } from 'react';
import OnboardingScreen from './components/OnboardingScreen';
import InterestSelection from './components/InterestSelection';
import ProfileCreation from './components/ProfileCreation';
import DailySpark from './components/DailySpark';
import CallWaiting from './components/CallWaiting';
import ChatScreen from './components/ChatScreen';
import CallScreen from './components/CallScreen';
import PostCallScreen from './components/PostCallScreen';

const Index = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState({
    name: '',
    interests: [],
    askMeAbout: '',
    voiceIntro: false,
    dailyMatches: 0,
    maxDailyMatches: 3 // Can be upgraded to 5
  });

  const steps = [
    'onboarding',
    'interests',
    'profile', 
    'dailySpark',
    'callWaiting',
    'chat',
    'call',
    'postCall'
  ];

  const updateUserData = (data) => {
    setUserData(prev => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const renderCurrentStep = () => {
    switch (steps[currentStep]) {
      case 'onboarding':
        return <OnboardingScreen onNext={nextStep} />;
      case 'interests':
        return <InterestSelection onNext={nextStep} onBack={prevStep} updateUserData={updateUserData} />;
      case 'profile':
        return <ProfileCreation onNext={nextStep} onBack={prevStep} updateUserData={updateUserData} userData={userData} />;
      case 'dailySpark':
        return <DailySpark onNext={nextStep} onBack={prevStep} userData={userData} />;
      case 'callWaiting':
        return <CallWaiting onNext={nextStep} onBack={prevStep} userData={userData} />;
      case 'chat':
        return <ChatScreen onNext={nextStep} onBack={prevStep} />;
      case 'call':
        return <CallScreen onNext={nextStep} onBack={prevStep} />;
      case 'postCall':
        return <PostCallScreen onBack={prevStep} userData={userData} updateUserData={updateUserData} />;
      default:
        return <OnboardingScreen onNext={nextStep} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-mint-50 via-coral-50 to-purple-50">
      {renderCurrentStep()}
    </div>
  );
};

export default Index;
