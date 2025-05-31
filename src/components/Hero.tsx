import React from "react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 flex items-center justify-center relative overflow-hidden py-20 lg:py-32">
      {/* Floating background elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-12">
          {/* Main Title */}
          <div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white tracking-tight">
              <span
                className="block opacity-0 animate-fade-in-up text-6xl lg:text-8xl mb-4"
                style={{
                  animationDelay: "0.1s",
                  animationFillMode: "forwards",
                }}
              >
                <span>Elevate</span>
                <span className="bg-gradient-to-r from-green-300 to-green-500 bg-clip-text text-transparent">
                  Health
                </span>
              </span>
              <span
                className="block opacity-0 animate-fade-in-up text-3xl lg:text-4xl font-light"
                style={{
                  animationDelay: "0.3s",
                  animationFillMode: "forwards",
                }}
              >
                Revolutionize Your
              </span>
              <span
                className="block opacity-0 animate-fade-in-up text-3xl lg:text-4xl font-light"
                style={{
                  animationDelay: "0.5s",
                  animationFillMode: "forwards",
                }}
              >
                Health Journey
              </span>
            </h1>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <div
              className="opacity-0 animate-fade-in-up bg-white/20 backdrop-blur-md rounded-full px-8 py-4 border border-white/30"
              style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
            >
              <span className="text-white font-semibold text-lg">
                🍳 Breakfast
              </span>
            </div>
            <div
              className="opacity-0 animate-fade-in-up bg-white/20 backdrop-blur-md rounded-full px-8 py-4 border border-white/30"
              style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
            >
              <span className="text-white font-semibold text-lg">🥗 Lunch</span>
            </div>
            <div
              className="opacity-0 animate-fade-in-up bg-white/20 backdrop-blur-md rounded-full px-8 py-4 border border-white/30"
              style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
            >
              <span className="text-white font-semibold text-lg">
                🍽️ Dinner
              </span>
            </div>
            <div
              className="opacity-0 animate-fade-in-up bg-white/20 backdrop-blur-md rounded-full px-8 py-4 border border-white/30"
              style={{ animationDelay: "1.0s", animationFillMode: "forwards" }}
            >
              <span className="text-white font-semibold text-lg">
                📱 Health Sync
              </span>
            </div>
          </div>

          {/* Subtitle */}
          <div
            className="opacity-0 animate-fade-in-up"
            style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
          >
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto font-light leading-relaxed">
              Our mission is to make health and wellness easy and accessible to
              everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
