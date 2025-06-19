'use client';
import React, { useState } from 'react';
import { Button } from './ui/button';

const InterestSelection = ({ onNext, onBack, updateUserData }) => {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const interestCategories = [
    {
      category: 'Creative Arts',
      interests: [
        { id: 'digital-art', name: 'Digital Art', emoji: '🎨', color: 'purple' },
        { id: 'photography', name: 'Photography', emoji: '📸', color: 'coral' },
        { id: 'music-production', name: 'Music Production', emoji: '🎵', color: 'mint' },
        { id: 'writing', name: 'Creative Writing', emoji: '✍️', color: 'purple' },
        { id: 'film-making', name: 'Film Making', emoji: '🎬', color: 'coral' },
        { id: 'design', name: 'UI/UX Design', emoji: '📱', color: 'mint' }
      ]
    },
    {
      category: 'Technology & Innovation',
      interests: [
        { id: 'coding', name: 'Programming', emoji: '💻', color: 'mint' },
        { id: 'ai-ml', name: 'AI & Machine Learning', emoji: '🤖', color: 'purple' },
        { id: 'crypto', name: 'Cryptocurrency', emoji: '₿', color: 'coral' },
        { id: 'startups', name: 'Startups & Entrepreneurship', emoji: '🚀', color: 'mint' },
        { id: 'gaming', name: 'Gaming & Esports', emoji: '🎮', color: 'purple' },
        { id: 'tech-news', name: 'Tech News', emoji: '📰', color: 'coral' }
      ]
    },
    {
      category: 'Lifestyle & Culture',
      interests: [
        { id: 'fashion', name: 'Fashion & Style', emoji: '👗', color: 'coral' },
        { id: 'travel', name: 'Travel & Culture', emoji: '✈️', color: 'mint' },
        { id: 'food', name: 'Food & Cooking', emoji: '🍕', color: 'purple' },
        { id: 'fitness', name: 'Fitness & Wellness', emoji: '💪', color: 'coral' },
        { id: 'mindfulness', name: 'Mindfulness & Mental Health', emoji: '🧘', color: 'mint' },
        { id: 'sustainability', name: 'Sustainability', emoji: '🌱', color: 'purple' }
      ]
    },
    {
      category: 'Learning & Growth',
      interests: [
        { id: 'books', name: 'Books & Literature', emoji: '📚', color: 'mint' },
        { id: 'languages', name: 'Language Learning', emoji: '🗣️', color: 'coral' },
        { id: 'philosophy', name: 'Philosophy', emoji: '🤔', color: 'purple' },
        { id: 'psychology', name: 'Psychology', emoji: '🧠', color: 'mint' },
        { id: 'science', name: 'Science & Research', emoji: '🔬', color: 'coral' },
        { id: 'history', name: 'History', emoji: '📜', color: 'purple' }
      ]
    }
  ];

  const allInterests = interestCategories.flatMap(cat => cat.interests);

  const toggleInterest = (interest) => {
    setSelectedInterests(prev => {
      if (prev.includes(interest.id)) {
        return prev.filter(id => id !== interest.id);
      }
      if (prev.length < 10) {
        return [...prev, interest.id];
      }
      return prev;
    });
  };

  const handleNext = () => {
    if (selectedInterests.length >= 3) {
      updateUserData({ interests: selectedInterests });
      onNext();
    }
  };

  const getColorClasses = (color, isSelected) => {
    const colors = {
      mint: isSelected ? 'bg-mint-500 text-white' : 'bg-mint-100 text-mint-700 hover:bg-mint-200',
      coral: isSelected ? 'bg-coral-500 text-white' : 'bg-coral-100 text-coral-700 hover:bg-coral-200',
      purple: isSelected ? 'bg-purple-500 text-white' : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen flex flex-col p-6">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-8 pt-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What sparks your curiosity?
          </h2>
          <p className="text-xl text-gray-600">
            Pick 3-10 interests to connect with like-minded people
          </p>
          <div className="mt-6 text-lg text-gray-500">
            {selectedInterests.length}/10 selected • {selectedInterests.length >= 3 ? '✅ Ready to continue' : `Need ${3 - selectedInterests.length} more`}
          </div>
        </div>

        {/* Interest Categories */}
        <div className="space-y-8 mb-8">
          {interestCategories.map((category) => (
            <div key={category.category}>
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">{category.category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {category.interests.map((interest) => {
                  const isSelected = selectedInterests.includes(interest.id);
                  return (
                    <button
                      key={interest.id}
                      onClick={() => toggleInterest(interest)}
                      className={`
                        p-4 rounded-2xl transition-all duration-300 transform hover:scale-105 border-2
                        ${isSelected ? 'border-transparent shadow-lg' : 'border-gray-200'}
                        ${getColorClasses(interest.color, isSelected)}
                      `}
                    >
                      <div className="text-3xl mb-2">{interest.emoji}</div>
                      <div className="font-medium text-sm text-center">{interest.name}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center space-x-4 mt-auto sticky bottom-6">
          <Button
            onClick={onBack}
            variant="outline"
            className="px-8 py-4 text-lg rounded-xl"
          >
            Back
          </Button>
          <Button
            onClick={handleNext}
            disabled={selectedInterests.length < 3}
            className="px-8 py-4 text-lg bg-gradient-to-r from-mint-500 to-coral-500 hover:from-mint-600 hover:to-coral-600 text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InterestSelection;
