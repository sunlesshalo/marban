import React from 'react';

const BackgroundAnimation: React.FC = () => {
  return (
    <div
      className="absolute inset-0 z-[1] animate-gradient-move opacity-10"
      style={{
        backgroundImage: `
          radial-gradient(circle at 10% 20%, rgba(185, 28, 28, 0.5), transparent 40%),
          radial-gradient(circle at 80% 90%, rgba(185, 28, 28, 0.4), transparent 40%),
          radial-gradient(circle at 50% 50%, rgba(185, 28, 28, 0.3), transparent 50%)
        `,
        backgroundSize: '400% 400%',
      }}
    />
  );
};

export default BackgroundAnimation;
