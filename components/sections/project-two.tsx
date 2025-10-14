"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { ProjectTwo } from "@/_data/projects";

export default function ProjectTwoSection() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-10 px-10">
     <h2 className="max-w-3xl pl-4 text-4xl md:text-5xl font-medium text-left">
             {ProjectTwo.heading}
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "",
    title: "Account Opening Service",
    src: "/blocks/firstbank/lifestyle.png",
    content: (
  <p>
    Business Problem: Onboarding new customers took up to 2 working days, limiting customer acquisition. <br />
    Solution Developed: Built a microservice integrated with 5 internal systems and 1 user-facing app (AccessMore).
    Localized for 10 African subsidiaries, including compliance and language support.<br />
    Business Impact: Reduced onboarding time from 10 mins → 5 mins. <br />
    Increased new account openings to 1,000+ daily (from &lt;200). <br />
    One of the fastest microservices (&lt;150ms response time).
  </p>
),

  },
  {
    category: "",
    title: "",
    src: "/blocks/firstbank/sign-in-1.png",
    content: "",
  },
  {
    category: "",
    title: "",
    src: "/blocks/firstbank/sign-in-2.png",
    content: "",
  },

  {
    category: "",
    title: "",
    src: "/blocks/firstbank/sign-in-3.png",
    content: "",
  },

  {
    category: "",
    title: "",
    src: "/blocks/firstbank/sign-in-4.png",
    content: "",
  },

  {
    category: "",
    title: "",
    src: "/blocks/firstbank/sign-in-5.png",
    content: "",
  },
];
