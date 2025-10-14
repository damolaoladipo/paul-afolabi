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
    title: "",
    src: "/blocks/firstbank/lifestyle.png",
    content: "",
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
