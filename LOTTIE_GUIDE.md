# Lottie Animations Guide for EduWhizz

## Overview
This guide explains how to use Lottie animations in your EduWhizz landing page. Lottie animations are lightweight, scalable animations that can enhance the user experience significantly.

## Installation
The `lottie-react` package has been installed:
```bash
npm install lottie-react
```

## How to Use Lottie Animations

### 1. Basic Usage
```tsx
import Lottie from 'lottie-react';

// Simple Lottie animation
<Lottie
  animationData={animationData}
  loop={true}
  autoplay={true}
/>
```

### 2. Methods to Add Lottie Animations

#### Method 1: Inline Animation Data (Current Implementation)
```tsx
<Lottie
  animationData={{
    "v": "5.7.4",
    "fr": 30,
    "ip": 0,
    "op": 120,
    "w": 400,
    "h": 400,
    "nm": "Animation Name",
    "ddd": 0,
    "assets": [],
    "layers": [
      // Animation layers here
    ]
  }}
  loop={true}
  autoplay={true}
/>
```

#### Method 2: External JSON Files (Recommended for Complex Animations)
1. Place your `.json` Lottie files in the `public/lottie/` directory
2. Import and use them:

```tsx
// For external files, you can fetch them or import them
const [animationData, setAnimationData] = useState(null);

useEffect(() => {
  fetch('/lottie/your-animation.json')
    .then(response => response.json())
    .then(data => setAnimationData(data));
}, []);

// Then use in component
{animationData && (
  <Lottie
    animationData={animationData}
    loop={true}
    autoplay={true}
  />
)}
```

### 3. Lottie Animation Properties

| Property | Type | Description |
|----------|------|-------------|
| `animationData` | Object | The Lottie animation data |
| `loop` | Boolean | Whether the animation should loop |
| `autoplay` | Boolean | Whether the animation should play automatically |
| `speed` | Number | Animation speed (1 = normal) |
| `direction` | Number | 1 for forward, -1 for reverse |
| `style` | Object | CSS styles for the container |
| `className` | String | CSS class for the container |

### 4. Current Lottie Animations in EduWhizz

#### Hero Section
- **Location**: Main hero area
- **Purpose**: School management visualization
- **Animation**: Rotating and scaling school building

#### About Section
- **Location**: About section header
- **Purpose**: Visual enhancement
- **Animation**: Pulsing circle with rotation

#### Features Section
- **Location**: Feature cards in Swiper
- **Purpose**: Replace static icons
- **Animations**: 
  - AI Rocket (rotating)
  - Security Lock (scaling)

#### Stats Section
- **Location**: Impact statistics
- **Purpose**: Animated icons for stats
- **Animations**: School building and student icons

#### Contact Section
- **Location**: Contact form header
- **Purpose**: Visual enhancement
- **Animation**: Envelope with gentle rocking motion

### 5. Creating Custom Lottie Animations

#### Using Adobe After Effects
1. Create your animation in After Effects
2. Install the Bodymovin plugin
3. Export as JSON
4. Place in `public/lottie/` directory

#### Using Online Tools
- **LottieFiles**: https://lottiefiles.com/
- **IconScout**: https://iconscout.com/
- **Rive**: https://rive.app/

### 6. Best Practices

#### Performance
- Keep animations lightweight (under 100KB)
- Use `loop={false}` for one-time animations
- Consider using `autoplay={false}` for animations below the fold

#### Accessibility
- Provide alternative content for users with reduced motion preferences
- Use `prefers-reduced-motion` media query:

```tsx
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

<Lottie
  animationData={animationData}
  loop={!prefersReducedMotion}
  autoplay={!prefersReducedMotion}
/>
```

#### Responsive Design
- Use relative sizing for animation containers
- Test on different screen sizes
- Consider different animation speeds for mobile

### 7. Example Component Structure

```tsx
import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

const AnimatedFeature: React.FC = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Load animation data
    setAnimationData({
      // Your animation data here
    });
  }, []);

  return (
    <div className="feature-card">
      <div className="animation-container w-16 h-16">
        {animationData && (
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            style={{ width: '100%', height: '100%' }}
          />
        )}
      </div>
      <h3>Feature Title</h3>
      <p>Feature description</p>
    </div>
  );
};
```

### 8. Troubleshooting

#### Common Issues
1. **Animation not playing**: Check if `autoplay` is set to `true`
2. **Animation too large**: Add `style={{ width: '100%', height: '100%' }}`
3. **Performance issues**: Reduce animation complexity or file size
4. **Import errors**: Ensure JSON files are properly formatted

#### Debug Tips
- Use browser dev tools to check for console errors
- Verify animation data structure
- Test with simple animations first
- Check network tab for failed file loads

### 9. Resources

- [Lottie React Documentation](https://github.com/LottieFiles/lottie-react)
- [LottieFiles Community](https://lottiefiles.com/)
- [Adobe After Effects Bodymovin Plugin](https://github.com/airbnb/lottie-web)
- [Lottie Animation Examples](https://lottiefiles.com/featured)

## Next Steps

1. **Add more animations**: Consider adding animations for loading states, success messages, and interactive elements
2. **Optimize performance**: Monitor animation performance and optimize as needed
3. **Create custom animations**: Design animations that match your brand identity
4. **A/B test**: Test different animations to see which ones improve user engagement

Remember to keep animations subtle and purposeful - they should enhance the user experience, not distract from it! 