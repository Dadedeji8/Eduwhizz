import React from 'react';
import Lottie from 'lottie-react';

// Example of how to use external Lottie files
const LottieExample: React.FC = () => {
  // Method 1: Using external JSON file (recommended for complex animations)
  const externalAnimationData = {
    "v": "5.7.4",
    "fr": 30,
    "ip": 0,
    "op": 120,
    "w": 400,
    "h": 400,
    "nm": "External Animation",
    "ddd": 0,
    "assets": [],
    "layers": [
      {
        "ddd": 0,
        "ind": 1,
        "ty": 4,
        "nm": "Animated Shape",
        "sr": 1,
        "ks": {
          "o": {"a": 0, "k": 100},
          "r": {"a": 1, "k": [{"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 0, "s": [0]}, {"t": 120, "s": [360]}]},
          "p": {"a": 0, "k": [200, 200, 0]},
          "a": {"a": 0, "k": [0, 0, 0]},
          "s": {"a": 0, "k": [100, 100, 100]}
        },
        "ao": 0,
        "shapes": [
          {
            "ty": "gr",
            "it": [
              {
                "d": 1,
                "ty": "el",
                "s": {"a": 0, "k": [80, 80]},
                "p": {"a": 0, "k": [0, 0]}
              },
              {
                "ty": "fl",
                "c": {"a": 0, "k": [0.2, 0.8, 1, 1]},
                "o": {"a": 0, "k": 80}
              }
            ]
          }
        ]
      }
    ]
  };

  return (
    <div className="flex flex-col items-center gap-8 p-8">
      <h2 className="text-2xl font-bold text-cyan-400">Lottie Animation Examples</h2>
      
      {/* Example 1: External animation data */}
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-300 mb-4">External Animation</h3>
        <div className="w-32 h-32">
          <Lottie
            animationData={externalAnimationData}
            loop={true}
            autoplay={true}
          />
        </div>
      </div>

      {/* Example 2: Inline animation data */}
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-300 mb-4">Inline Animation</h3>
        <div className="w-32 h-32">
          <Lottie
            animationData={{
              "v": "5.7.4",
              "fr": 30,
              "ip": 0,
              "op": 90,
              "w": 200,
              "h": 200,
              "nm": "Inline Animation",
              "ddd": 0,
              "assets": [],
              "layers": [
                {
                  "ddd": 0,
                  "ind": 1,
                  "ty": 4,
                  "nm": "Pulsing Circle",
                  "sr": 1,
                  "ks": {
                    "o": {"a": 0, "k": 100},
                    "r": {"a": 0, "k": 0},
                    "p": {"a": 0, "k": [100, 100, 0]},
                    "a": {"a": 0, "k": [0, 0, 0]},
                    "s": {"a": 1, "k": [{"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 0, "s": [80, 80, 100]}, {"t": 45, "s": [120, 120, 100]}, {"t": 90, "s": [80, 80, 100]}]}
                  },
                  "ao": 0,
                  "shapes": [
                    {
                      "ty": "gr",
                      "it": [
                        {
                          "d": 1,
                          "ty": "el",
                          "s": {"a": 0, "k": [60, 60]},
                          "p": {"a": 0, "k": [0, 0]}
                        },
                        {
                          "ty": "fl",
                          "c": {"a": 0, "k": [0.8, 0.4, 1, 1]},
                          "o": {"a": 0, "k": 100}
                        }
                      ]
                    }
                  ]
                }
              ]
            }}
            loop={true}
            autoplay={true}
          />
        </div>
      </div>
    </div>
  );
};

export default LottieExample; 