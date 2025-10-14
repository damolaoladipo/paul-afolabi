"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { ProjectBackOffice } from "@/_data/projects";

export default function BackOfficeSection() {
  const cards = data.map((card, index) => (
    <Card
      key={card.src}
      card={card}
      index={index}
      className="w-[22rem] h-[28rem] sm:w-[26rem] sm:h-[30rem] lg:w-[60rem] lg:h-[36rem]"
    />
  ));

  return (
    <section className="w-full px-6 py-10 md:py-20">
      <h2 className="mb-10 max-w-7xl text-left text-3xl font-semibold md:text-5xl">
        {ProjectBackOffice.heading}
      </h2>
      <Carousel items={cards} />
    </section>
  );
}

const data = [
  {
    category: "",
    title: "SmileID (Biometric Onboarding)",
    src: "/blocks/firstbank/one.png",
    content: (
  <p>
    Business Problem: Manual onboarding was slow and frustrating, discouraging new customers. <br />
    Solution Developed: Built biometric onboarding feature as a microservice. <br />
    Business Impact: Reduced onboarding time from &lt;10 mins → 5 mins. <br />
    Achieved adoption by 10K+ users in first 3 weeks. <br />
    One of the fastest microservices (&lt;150ms response time).
  </p>
),

  },
  {
    category: "First Bank",
    title: "",
    src: "/blocks/firstbank/two.png",
    content: <p>Centralized system for secure transaction management.</p>,
  },
  {
    category: "",
    title: "AI Insights",
    src: "/blocks/firstbank/three.png",
    content: <p>Predictive analytics for smarter decision making.</p>,
  },
];
