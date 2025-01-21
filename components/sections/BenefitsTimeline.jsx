export default function BenefitsTimeline() {
  const timelineData = [
    {
      day: "Day 1-7",
      benefit: "Initial digestive comfort improvement",
      description: "Experience reduced bloating and better digestion"
    },
    {
      day: "Week 2-3",
      benefit: "Enhanced Gut Health",
      description: "Notice improved nutrient absorption and regular bowel movements"
    },
    {
      day: "Month 1",
      benefit: "Overall Wellness",
      description: "Feel more energetic and experience better immunity"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <h2 className="text-3xl md:text-5xl text-center mb-16 font-bold text-[#2A6177]">
        Your Journey to Better Health
      </h2>
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#43c3ff]" />
          
          {timelineData.map((item, index) => (
            <div key={index} className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : ''} mb-16`}>
              <div className="w-1/2 pr-8">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-[#2A6177] mb-2">{item.day}</h3>
                  <h4 className="text-lg font-semibold mb-2">{item.benefit}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
              <div className="w-1/2 flex justify-center items-center">
                <div className="w-4 h-4 bg-[#43c3ff] rounded-full relative z-10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
