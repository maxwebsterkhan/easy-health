"use client";

import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const About = () => {
  const { elementRef: titleRef, isVisible: titleVisible } =
    useScrollAnimation();
  const { elementRef: contentRef, isVisible: contentVisible } =
    useScrollAnimation({ rootMargin: "0px 0px -50px 0px" });

  return (
    <div className="py-32 bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-400">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          <div
            ref={titleRef}
            className={`text-center transition-all duration-800 ${
              titleVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 font-heading">
              The Future of Wellness
            </h2>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto font-light font-body">
              We&apos;re exploring the future of personalized wellness by
              combining the convenience of chef-crafted meal delivery with
              intelligent health tracking. Our mission is to make health and
              wellness easy and accessible to everyone.
            </p>
          </div>

          <div
            ref={contentRef}
            className={`transition-all duration-800 ${
              contentVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: contentVisible ? "200ms" : "0ms" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 max-w-4xl mx-auto">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-6 tracking-tight font-heading">
                  Seamless Integration
                </h3>
                <p className="text-lg text-white/80 leading-relaxed font-light font-body">
                  Connect with your favorite health apps and wearables. Every
                  meal automatically syncs with your health data, giving you a
                  complete picture of your wellness journey.
                </p>
              </div>

              <div className="text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-6 tracking-tight font-heading">
                  Chef-Crafted Quality
                </h3>
                <p className="text-lg text-white/80 leading-relaxed font-light font-body">
                  Every meal is designed by nutritionists and prepared by
                  professional chefs using fresh, high-quality ingredients.
                  Delicious food that supports your health goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
