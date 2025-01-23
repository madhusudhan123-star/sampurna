import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function BenefitsTimeline() {
  const timelineData = [
    {
      day: "Day 1-7",
      benefit: "Initial digestive comfort improvement",
      description: "Experience reduced bloating and better digestion",
      additionalContent: {
        details: [
          "Reduced stomach discomfort",
          "Better nutrient absorption",
          "Improved gut flora balance"
        ],
        tips: "Take with warm water before meals for best results"
      }
    },
    {
      day: "Week 2-3",
      benefit: "Enhanced Gut Health",
      description: "Notice improved nutrient absorption and regular bowel movements",
      additionalContent: {
        details: [
          "Regular bowel movements",
          "Reduced acid reflux",
          "Better appetite control"
        ],
        tips: "Maintain consistent timing for supplement intake"
      }
    },
    {
      day: "Month 1",
      benefit: "Overall Wellness",
      description: "Feel more energetic and experience better immunity",
      additionalContent: {
        details: [
          "Increased energy levels",
          "Stronger immune system",
          "Better mental clarity"
        ],
        tips: "Combine with healthy diet for optimal results"
      }
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const lineVariants = {
    hidden: {
      scaleY: 0,
      originY: 0
    },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  };

  const dotVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }
  };

  return (
    <div className="py-20 bg-white overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl text-center mb-16 font-bold text-[#2A6177]"
      >
        Your Journey to Better Health
      </motion.h2>

      <div className="max-w-6xl mx-auto px-4" ref={ref}>
        <div className="relative">
          <motion.div
            variants={lineVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#cf1cff] to-[#cf1cff]"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : ''} mb-16`}
              >
                <div className="w-1/2 px-8">
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    className="bg-white p-6 rounded-xl shadow-lg group hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                    style={{
                      background: "linear-gradient(145deg, #ffffff, #f3f3f3)",
                      boxShadow: "5px 5px 15px #d1d1d1, -5px -5px 15px #ffffff"
                    }}
                  >
                    {/* Main Content */}
                    <div className="relative z-10 transition-all duration-300 group-hover:translate-y-[-8px]">
                      <h3 className="text-xl font-bold text-[#2A6177] mb-2">{item.day}</h3>
                      <h4 className="text-lg font-semibold mb-2 text-gray-800">{item.benefit}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>

                    {/* Additional Content - Hidden by default, shown on hover */}
                    <motion.div
                      className="mt-4 overflow-hidden transition-all duration-300 h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-6"
                      initial={false}
                    >
                      <div className="border-t pt-4">
                        <h5 className="font-semibold text-[#2A6177] mb-2">Key Benefits:</h5>
                        <ul className="space-y-2">
                          {item.additionalContent.details.map((detail, idx) => (
                            <li key={idx} className="flex items-center text-gray-600">
                              <span className="w-2 h-2 bg-[#cf1cff] rounded-full mr-2"></span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 bg-[#f8f8f8] p-3 rounded-lg">
                          <p className="text-sm text-gray-600 italic">
                            💡 Tip: {item.additionalContent.tips}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>

                <div className="w-1/2 flex justify-center items-center">
                  <motion.div
                    variants={dotVariants}
                    className="w-6 h-6 bg-[#cf1cff] rounded-full relative z-10 shadow-lg"
                    whileHover={{ scale: 1.2 }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-[#cf1cff] rounded-full opacity-50"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
