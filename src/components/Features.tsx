"use client";

import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Features = () => {
  const { elementRef: headerRef, isVisible: headerVisible } =
    useScrollAnimation();
  const { elementRef: feature1Ref, isVisible: feature1Visible } =
    useScrollAnimation({ rootMargin: "0px 0px -100px 0px" });
  const { elementRef: feature2Ref, isVisible: feature2Visible } =
    useScrollAnimation({ rootMargin: "0px 0px -100px 0px" });
  const { elementRef: feature3Ref, isVisible: feature3Visible } =
    useScrollAnimation({ rootMargin: "0px 0px -100px 0px" });

  return (
    <div className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-800 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Everything you need.
            <span className="block text-gray-700">Nothing you don&apos;t.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          <div
            ref={feature1Ref}
            className={`text-center transition-all duration-800 ${
              feature1Visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: feature1Visible ? "100ms" : "0ms" }}
          >
            <div className="mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🥘</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Chef-Crafted Meals
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-sm mx-auto">
                Nutritional and delicious meals from your favourite services all
                in one place
              </p>
            </div>
          </div>

          <div
            ref={feature2Ref}
            className={`text-center transition-all duration-800 ${
              feature2Visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: feature2Visible ? "200ms" : "0ms" }}
          >
            <div className="mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Smart Health Tracking
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-sm mx-auto">
                Seamlessly sync your nutrition data with your favourite health
                platforms
              </p>
            </div>
          </div>

          <div
            ref={feature3Ref}
            className={`text-center transition-all duration-800 ${
              feature3Visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: feature3Visible ? "300ms" : "0ms" }}
          >
            <div className="mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Personalized Goals
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-sm mx-auto">
                Tailored meal plans and health insights that adapt to your
                lifestyle and preferences
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
