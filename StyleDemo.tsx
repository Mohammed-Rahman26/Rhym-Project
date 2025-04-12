import React from 'react';

const StyleDemo = () => {
  return (
    <div className="particle-bg min-h-screen p-8 bg-cyber-dark text-cyber-light">
      <h1 className="text-4xl font-bold mb-8 text-center text-gradient bg-gradient-rainbow">
        Colorful Styling Demo
      </h1>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Color Palette */}
        <section className="glow-border p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">Color Palette</h2>
          <div className="grid grid-cols-4 gap-4">
            {Object.entries({
              red: 'bg-cyber-red',
              blue: 'bg-cyber-blue',
              purple: 'bg-cyber-purple',
              teal: 'bg-cyber-teal',
              yellow: 'bg-cyber-yellow',
              pink: 'bg-cyber-pink',
              orange: 'bg-cyber-orange',
              dark: 'bg-cyber-dark'
            }).map(([name, cls]) => (
              <div key={name} className="text-center">
                <div className={`${cls} h-16 w-full rounded-md mb-2`}></div>
                <span className="text-sm">{name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Gradients */}
        <section className="neumorphism p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">Gradients</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="h-32 rounded-md bg-gradient-to-r from-cyber-red to-cyber-yellow"></div>
            <div className="h-32 rounded-md bg-gradient-to-r from-cyber-blue to-cyber-teal"></div>
            <div className="h-32 rounded-md bg-gradient-to-r from-cyber-purple to-cyber-pink"></div>
          </div>
        </section>

        {/* Animations */}
        <section className="glow-border p-6 rounded-xl animate-wave">
          <h2 className="text-2xl font-semibold mb-4">Animations</h2>
          <div className="flex flex-wrap gap-4">
            <div className="w-16 h-16 bg-cyber-red rounded-full animate-float"></div>
            <div className="w-16 h-16 bg-cyber-blue rounded-full animate-spin-slow"></div>
            <div className="w-16 h-16 bg-cyber-yellow rounded-full animate-bounce-slow"></div>
            <div className="w-16 h-16 bg-gradient-rainbow rounded-full animate-glow"></div>
          </div>
        </section>

        {/* Text Effects */}
        <section className="p-6 rounded-xl bg-cyber-darker">
          <h2 className="text-2xl font-semibold mb-4 text-gradient bg-gradient-to-r from-cyber-teal to-cyber-blue">
            Text Effects
          </h2>
          <p className="mb-4 animate-shimmer">
            This text shimmers with animation!
          </p>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-red to-cyber-orange">
            Gradient text effect
          </p>
        </section>
      </div>
    </div>
  );
};

export default StyleDemo;
