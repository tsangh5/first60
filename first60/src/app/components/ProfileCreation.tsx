'use client';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Switch } from '@radix-ui/react-switch';
import { Mic, User } from 'lucide-react';

const ProfileCreation = ({ onNext, onBack, updateUserData, userData }) => {
  const [formData, setFormData] = useState({
    name: userData.name || '',
    askMeAbout: userData.askMeAbout || '',
    voiceIntro: userData.voiceIntro || false
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (formData.name && formData.askMeAbout) {
      updateUserData(formData);
      onNext();
    }
  };

  return (
    <div className="min-h-screen flex flex-col p-6">
      <div className="max-w-2xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12 pt-12">
          <div className="bg-gradient-to-r from-mint-400 to-coral-400 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
            <User className="h-12 w-12 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Tell us about yourself
          </h2>
          <p className="text-xl text-gray-600">
            Create your profile to start making connections
          </p>
        </div>

        {/* Form */}
        <div className="space-y-8 mb-12">
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-3">
              Your name
            </label>
            <Input
              type="text"
              placeholder="What should people call you?"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="rounded-xl border-gray-200 text-lg p-4"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-3">
              Ask me about...
            </label>
            <Textarea
              placeholder="What are you passionate about? What could you talk about for hours? Share your experiences, hobbies, goals, or anything that excites you!"
              value={formData.askMeAbout}
              onChange={(e) => handleInputChange('askMeAbout', e.target.value)}
              className="rounded-xl border-gray-200 min-h-[120px] text-lg p-4"
            />
          </div>

          <div className="bg-mint-50 rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-mint-200 rounded-full p-3">
                  <Mic className="h-6 w-6 text-mint-700" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800 text-lg">Voice intro</div>
                  <div className="text-gray-600">Record a quick hello (optional)</div>
                </div>
              </div>
              <Switch
                checked={formData.voiceIntro}
                onCheckedChange={(checked) => handleInputChange('voiceIntro', checked)}
              />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center space-x-4">
          <Button
            onClick={onBack}
            variant="outline"
            className="px-8 py-4 text-lg rounded-xl"
          >
            Back
          </Button>
          <Button
            onClick={handleNext}
            disabled={!formData.name || !formData.askMeAbout}
            className="px-8 py-4 text-lg bg-gradient-to-r from-mint-500 to-coral-500 hover:from-mint-600 hover:to-coral-600 text-white rounded-xl disabled:opacity-50"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCreation;
