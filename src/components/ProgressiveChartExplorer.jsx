import React, { useState } from 'react';
// At the top of your ProgressiveChartExplorer.jsx file
import './ProgressiveChartExplorer.css';
import { Calendar, ArrowRight, ArrowLeftRight, Info, AlertCircle, ChevronDown, ChevronUp, Download } from 'lucide-react';

const ProgressiveChartExplorer = () => {
  const [progressedAge, setProgressedAge] = useState(30);
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [showComparison, setShowComparison] = useState({});
  
  // Natal chart data
  const natalChart = {
    sun: { sign: 'Pisces', degree: '1°22\'', house: 5, description: 'Creative, intuitive, empathetic, imaginative' },
    moon: { sign: 'Pisces', degree: '4°39\'', house: 5, description: 'Emotionally sensitive, deeply feeling, receptive to surroundings' },
    mercury: { sign: 'Pisces', degree: '1°58\'', house: 5, description: 'Intuitive thinking, creative communication, artistic mind' },
    venus: { sign: 'Aries', degree: '14°16\'', house: 6, description: 'Direct in affection, independent in relationships, passionate' },
    mars: { sign: 'Aries', degree: '12°58\'', house: 6, description: 'Energetic worker, assertive action, initiative in daily tasks' },
    jupiter: { sign: 'Aquarius', degree: '3°01\'', house: 4, description: 'Progressive family values, humanitarian outlook, innovative home life' },
    saturn: { sign: 'Scorpio', degree: '27°55\'', house: 2, description: 'Disciplined approach to finances, builds security through hard work' },
    uranus: { sign: 'Sagittarius', degree: '17°33\'', house: 2, description: 'Innovative approaches to finances, unexpected changes in resources' },
    neptune: { sign: 'Capricorn', degree: '3°05\'', house: 3, description: 'Structured imagination, practical idealism, service-oriented communication' },
    pluto: { sign: 'Scorpio', degree: '4°41\'', house: 1, description: 'Powerful presence, transformative personality, intense self-expression' }
  };
  
  // Progressed chart data (would be calculated based on selected age)
  // In a real app, this would be calculated dynamically based on the selected age
  const getProgressedChart = (age) => {
    // Simplified calculation: roughly 1 degree per year for Sun, Mercury, Venus
    // In real astrology, different planets move at different rates
    const progressedCharts = {
      30: {
        sun: { sign: 'Aries', degree: '1°22\'', house: 5, description: 'Developing more assertive self-expression and independence' },
        moon: { sign: 'Taurus', degree: '15°39\'', house: 6, description: 'Emotional focus shifting toward stability and material security' },
        mercury: { sign: 'Aries', degree: '3°58\'', house: 5, description: 'Communication becoming more direct and decisive' },
        venus: { sign: 'Taurus', degree: '12°16\'', house: 6, description: 'Developing more grounded approach to relationships and values' },
        mars: { sign: 'Aries', degree: '20°58\'', house: 6, description: 'Increasing assertiveness in work and service to others' },
        jupiter: { sign: 'Aquarius', degree: '3°10\'', house: 4, description: 'Expanding progressive ideals within home and family context' },
        saturn: { sign: 'Scorpio', degree: '28°10\'', house: 2, description: 'Deepening commitment to financial responsibility' },
        uranus: { sign: 'Sagittarius', degree: '17°40\'', house: 2, description: 'Evolving approach to personal resources and values' },
        neptune: { sign: 'Capricorn', degree: '3°08\'', house: 3, description: 'Structuring spiritual ideals into practical communication' },
        pluto: { sign: 'Scorpio', degree: '4°45\'', house: 1, description: 'Ongoing transformation of personal identity and self-expression' }
      },
      40: {
        sun: { sign: 'Aries', degree: '11°22\'', house: 5, description: 'Strong individuation and pioneering creative expression' },
        moon: { sign: 'Cancer', degree: '2°39\'', house: 8, description: 'Emotional focus on deep bonding and shared resources' },
        mercury: { sign: 'Aries', degree: '13°58\'', house: 5, description: 'Increasingly assertive communication style and mental outlook' },
        venus: { sign: 'Gemini', degree: '1°16\'', house: 7, description: 'Growing versatility in relationship styles and appreciation' },
        mars: { sign: 'Taurus', degree: '2°58\'', house: 6, description: 'More methodical approach to work and daily routines' },
        jupiter: { sign: 'Aquarius', degree: '3°20\'', house: 4, description: 'Established progressive approach to home and family matters' },
        saturn: { sign: 'Sagittarius', degree: '0°55\'', house: 2, description: 'Restructuring personal values and financial philosophy' },
        uranus: { sign: 'Sagittarius', degree: '17°48\'', house: 2, description: 'Continuing evolution of relationship with material security' },
        neptune: { sign: 'Capricorn', degree: '3°12\'', house: 3, description: 'Maturing idealistic communication with practical focus' },
        pluto: { sign: 'Scorpio', degree: '4°50\'', house: 1, description: 'Deeper integration of transformative personal power' }
      },
      50: {
        sun: { sign: 'Aries', degree: '21°22\'', house: 5, description: 'Mastery of self-directed creative expression' },
        moon: { sign: 'Virgo', degree: '8°39\'', house: 10, description: 'Emotional fulfillment through practical achievement and service' },
        mercury: { sign: 'Aries', degree: '23°58\'', house: 5, description: 'Confident, pioneering mental approach' },
        venus: { sign: 'Cancer', degree: '4°16\'', house: 8, description: 'Nurturing approach to intimate relationships and shared resources' },
        mars: { sign: 'Taurus', degree: '22°58\'', house: 6, description: 'Persevering energy applied to work and health matters' },
        jupiter: { sign: 'Aquarius', degree: '3°30\'', house: 4, description: 'Expanded wisdom regarding unconventional family structures' },
        saturn: { sign: 'Sagittarius', degree: '3°55\'', house: 2, description: 'Philosophical maturity regarding personal values and resources' },
        uranus: { sign: 'Sagittarius', degree: '17°55\'', house: 2, description: 'Revolutionary perspective on personal worth and talents' },
        neptune: { sign: 'Capricorn', degree: '3°20\'', house: 3, description: 'Spiritual wisdom expressed through structured communication' },
        pluto: { sign: 'Scorpio', degree: '4°55\'', house: 1, description: 'Profound transformation and regeneration of identity' }
      }
    };
    
    // Return the closest pre-calculated chart or interpolate
    if (age <= 30) return progressedCharts[30];
    if (age <= 40) return progressedCharts[40];
    return progressedCharts[50];
  };
  
  const progressedChart = getProgressedChart(progressedAge);
  
  // Significant progressed aspects
  const significantAspects = {
    30: [
      { planets: 'Progressed Sun enters Aries', interpretation: 'A major shift in self-expression toward greater assertiveness and independence. This begins a 30-year cycle of self-development focused on initiative and pioneering new paths.' },
      { planets: 'Progressed Moon enters Taurus', interpretation: 'Emotional needs shift toward stability, comfort, and material security. This 2.5-year phase emphasizes building resources and enjoying sensory pleasures.' },
      { planets: 'Progressed Mercury conjunct natal Sun', interpretation: 'Increased mental clarity about your core identity and purpose. Communications align more authentically with your essential self.' }
    ],
    40: [
      { planets: 'Progressed Sun square natal Saturn', interpretation: 'A period of testing that requires disciplined effort to overcome obstacles. This can lead to significant achievements through persistent work.' },
      { planets: 'Progressed Venus enters Gemini', interpretation: 'Relationship needs evolve toward greater variety and intellectual connection. You may seek more diverse social connections and versatility in affections.' },
      { planets: 'Progressed Moon enters Cancer', interpretation: 'Emotional focus turns toward nurturing connections, family bonds, and creating emotional security. Heightened sensitivity to others\' needs.' }
    ],
    50: [
      { planets: 'Progressed Sun trine natal Pluto', interpretation: 'Integration of personal power and transformative ability. Increased capacity to influence others and manifest deep changes in your life direction.' },
      { planets: 'Progressed Mars enters late Taurus', interpretation: 'Energy becomes more focused on completing long-term projects and securing lasting achievements. Persistence pays off in tangible results.' },
      { planets: 'Progressed Moon in Virgo in 10th House', interpretation: 'Emotional fulfillment comes through practical service, attention to detail, and professional accomplishment. Period of emotional refinement.' }
    ]
  };
  
  // Color coding for zodiac signs
  const signColors = {
    Aries: '#D14124',      // deep red
    Taurus: '#2E7D32',     // dark green
    Gemini: '#FFA000',     // amber
    Cancer: '#0277BD',     // blue
    Leo: '#D84315',        // burnt orange
    Virgo: '#00695C',      // teal
    Libra: '#7B1FA2',      // purple
    Scorpio: '#880E4F',    // dark pink
    Sagittarius: '#C62828', // dark red
    Capricorn: '#37474F',  // blue grey
    Aquarius: '#1565C0',   // blue
    Pisces: '#4527A0'      // deep purple
  };
  
  // Toggle comparison view for a planet
  const toggleComparison = (planet) => {
    setShowComparison(prev => ({
      ...prev,
      [planet]: !prev[planet]
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <header className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Progressive Birth Chart Explorer</h1>
        <p className="text-gray-600">See how your birth chart evolves over time</p>
      </header>
      
      <div className="mb-6 bg-white rounded-lg shadow-md p-4">
        <div className="flex items-center mb-4">
          <Calendar className="h-5 w-5 text-blue-600 mr-2" />
          <h2 className="text-lg font-semibold">Select Progression Age</h2>
        </div>
        <div className="space-y-2">
          <input 
            type="range" 
            min="1" 
            max="90" 
            value={progressedAge} 
            onChange={(e) => setProgressedAge(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            aria-label="Progression age slider"
          />
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Age 1</span>
            <span className="text-lg font-medium">Age {progressedAge}</span>
            <span className="text-sm text-gray-600">Age 90</span>
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-600">
          In progressions, each day after birth corresponds to approximately one year of life, showing how your chart gradually evolves.
        </p>
      </div>
      
      <div className="mb-6 bg-white rounded-lg shadow-md">
        <div className="border-b px-4 py-3">
          <h2 className="text-lg font-semibold">Natal vs. Progressed Chart</h2>
          <p className="text-sm text-gray-600">Compare your birth chart with your progressed chart at age {progressedAge}</p>
        </div>
        
        <div className="divide-y">
          {Object.entries(natalChart).map(([planet, natalData]) => {
            const progressedData = progressedChart[planet];
            const signChanged = natalData.sign !== progressedData.sign;
            const houseChanged = natalData.house !== progressedData.house;
            
            return (
              <div key={planet} className="p-4">
                <div 
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleComparison(planet)}
                >
                  <h3 className="font-medium capitalize">{planet}</h3>
                  <div className="flex items-center">
                    {(signChanged || houseChanged) && (
                      <span className="text-xs bg-yellow-100 text-yellow-800 font-medium mr-2 px-2 py-0.5 rounded">
                        {signChanged && houseChanged ? 'Major Change' : 'Changed'}
                      </span>
                    )}
                    {showComparison[planet] ? 
                      <ChevronUp className="h-5 w-5 text-gray-400" /> : 
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    }
                  </div>
                </div>
                
                {showComparison[planet] && (
                  <div className="mt-3 space-y-4">
                    <div className="flex flex-col sm:flex-row">
                      <div className="flex-1 p-3 bg-gray-50 rounded-lg mb-2 sm:mb-0 sm:mr-2">
                        <h4 className="text-sm font-medium mb-1">Natal Position</h4>
                        <div className="flex items-center">
                          <div 
                            className="w-3 h-3 rounded-full mr-2" 
                            style={{ backgroundColor: signColors[natalData.sign] }}
                          ></div>
                          <span>{natalData.sign} {natalData.degree}</span>
                        </div>
                        <p className="text-sm mt-1">House {natalData.house}</p>
                        <p className="text-xs text-gray-600 mt-2">{natalData.description}</p>
                      </div>
                      
                      <div className="hidden sm:flex items-center">
                        <ArrowRight className="h-5 w-5 text-gray-400" />
                      </div>
                      
                      <div className="sm:hidden flex justify-center my-1">
                        <ArrowLeftRight className="h-5 w-5 text-gray-400" />
                      </div>
                      
                      <div className="flex-1 p-3 bg-blue-50 rounded-lg">
                        <h4 className="text-sm font-medium mb-1">Progressed to Age {progressedAge}</h4>
                        <div className="flex items-center">
                          <div 
                            className="w-3 h-3 rounded-full mr-2" 
                            style={{ backgroundColor: signColors[progressedData.sign] }}
                          ></div>
                          <span className={signChanged ? "font-medium" : ""}>
                            {progressedData.sign} {progressedData.degree}
                          </span>
                        </div>
                        <p className={`text-sm mt-1 ${houseChanged ? "font-medium" : ""}`}>
                          House {progressedData.house}
                        </p>
                        <p className="text-xs text-gray-600 mt-2">{progressedData.description}</p>
                      </div>
                    </div>
                    
                    {(signChanged || houseChanged) && (
                      <div className="p-3 bg-yellow-50 rounded-lg">
                        <h4 className="text-sm font-medium flex items-center">
                          <Info className="h-4 w-4 text-yellow-600 mr-1" />
                          Significance of Change
                        </h4>
                        <p className="text-xs mt-1">
                          {signChanged ? 
                            `Moving from ${natalData.sign} to ${progressedData.sign} shows an evolution in how your ${planet} energy expresses.` : 
                            ''
                          }
                          {houseChanged ? 
                            ` The shift from House ${natalData.house} to House ${progressedData.house} indicates this energy now operates in a different life area.` : 
                            ''
                          }
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="mb-6 bg-white rounded-lg shadow-md">
        <div className="border-b px-4 py-3">
          <h2 className="text-lg font-semibold">Significant Progressed Aspects</h2>
          <p className="text-sm text-gray-600">Key evolutionary themes around age {progressedAge}</p>
        </div>
        
        <div className="p-4">
          <div className="space-y-4">
            {significantAspects[progressedAge <= 30 ? 30 : progressedAge <= 40 ? 40 : 50].map((aspect, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-3 py-1">
                <h3 className="font-medium">{aspect.planets}</h3>
                <p className="text-sm mt-1">{aspect.interpretation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 rounded-lg p-4 flex items-start">
        <AlertCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm">
            Progressions reflect your inner evolution and development over time. They show how your natal potentials unfold and mature as you grow and gain life experience.
          </p>
          <button className="mt-2 text-sm text-blue-700 hover:text-blue-900 flex items-center">
            <Download className="h-4 w-4 mr-1" /> Download progression report
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgressiveChartExplorer;