"use client";

import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Interest = () => {
  const { elementRef: headerRef, isVisible: headerVisible } =
    useScrollAnimation();
  const { elementRef: buttonRef, isVisible: buttonVisible } =
    useScrollAnimation({ rootMargin: "0px 0px -50px 0px" });
  const { elementRef: benefit1Ref, isVisible: benefit1Visible } =
    useScrollAnimation({ rootMargin: "0px 0px -80px 0px" });
  const { elementRef: benefit2Ref, isVisible: benefit2Visible } =
    useScrollAnimation({ rootMargin: "0px 0px -80px 0px" });
  const { elementRef: benefit3Ref, isVisible: benefit3Visible } =
    useScrollAnimation({ rootMargin: "0px 0px -80px 0px" });

  const handleInterestClick = () => {
    console.log("User registered interest in ElevateHealth!");
    // TODO: Replace with actual interest registration logic
  };

  return (
    <div className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-12">
          <div
            ref={headerRef}
            className={`space-y-6 transition-all duration-800 ${
              headerVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
              What do you think?
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Help us understand if this vision resonates with you. Share your
              thoughts and stay updated on our progress.
            </p>
          </div>

          <div
            ref={buttonRef}
            className={`py-8 transition-all duration-600 ${
              buttonVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            style={{ transitionDelay: buttonVisible ? "200ms" : "0ms" }}
          >
            <button
              onClick={handleInterestClick}
              className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 hover:from-purple-700 hover:via-blue-700 hover:to-cyan-600 text-white font-semibold py-4 px-10 rounded-full text-lg group overflow-hidden transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:-translate-y-0.5"
            >
              <span className="relative z-10">Share Your Interest</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full"></div>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-400 rounded-full"></div>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            <div
              ref={benefit1Ref}
              className={`flex flex-col items-center space-y-3 transition-all duration-300 ease-out ${
                benefit1Visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: benefit1Visible ? "100ms" : "0ms",
                transitionProperty: benefit1Visible
                  ? "transform, opacity"
                  : "transform, opacity, scale",
              }}
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-900">Share Feedback</h3>
              <p className="text-sm text-gray-600 text-center">
                Help us understand what matters most to you
              </p>
            </div>

            <div
              ref={benefit2Ref}
              className={`flex flex-col items-center space-y-3 transition-all duration-300 ease-out ${
                benefit2Visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: benefit2Visible ? "200ms" : "0ms",
                transitionProperty: benefit2Visible
                  ? "transform, opacity"
                  : "transform, opacity, scale",
              }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-900">Stay Updated</h3>
              <p className="text-sm text-gray-600 text-center">
                Get updates if we decide to move forward
              </p>
            </div>

            <div
              ref={benefit3Ref}
              className={`flex flex-col items-center space-y-3 transition-all duration-300 ease-out ${
                benefit3Visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: benefit3Visible ? "300ms" : "0ms",
                transitionProperty: benefit3Visible
                  ? "transform, opacity"
                  : "transform, opacity, scale",
              }}
            >
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-900">
                Influence Direction
              </h3>
              <p className="text-sm text-gray-600 text-center">
                Your input could shape what we build
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interest;
