"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { ProjectOne } from "@/_data/projects";

export default function ProjectOneSection() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 px-10" id="projects">
      <h2 className="max-w-3xl pl-4 text-4xl md:text-5xl font-medium text-left">
        {ProjectOne.heading}
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: " ",
    title: "Access Bank",
    src: "/blocks/accessbank/image-1.png",
    content: (
  <p>
    Business Problem: Manual onboarding was slow and frustrating, discouraging new customers. <br />
    Solution Developed: Built biometric onboarding feature as a microservice. <br />
    Business Impact: Reduced onboarding time from &lt;10 mins → 5 mins. <br />
    Achieved adoption by 10K+ users in first 3 weeks. <br />
    One of the fastest microservices (&lt;150ms response time).
  </p>)
  },
  {
    category: "",
    title: "",
    src: "/blocks/accessbank/image-2.png",
    content: <></>,
  },
  {
    category: "",
    title: "",
    src: "/blocks/accessbank/image-3.png",
    content: <></>,
  },

  {
    category: "",
    title: "",
    src: "/blocks/accessbank/image-4.png",
    content: '',
  }
];
