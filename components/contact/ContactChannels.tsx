"use client";

import React from "react";
import { BiEnvelope, BiMap, BiMessageDetail, BiPhone } from "react-icons/bi";

const channels = [
  {
    icon: BiEnvelope,
    title: "Email",
    description: "Send your inquiry and we'll respond within 24 hours.",
    link: {
      label: "info@expressfoods.com",
      href: "mailto:info@expressfoods.com",
    },
  },
  {
    icon: BiMessageDetail,
    title: "WhatsApp",
    description: "Quick messaging for urgent sourcing questions and updates.",
    link: {
      label: "Message us now",
      href: "https://wa.me/20200000000",
    },
  },
  {
    icon: BiPhone,
    title: "Phone",
    description: "Speak directly with our commercial team about your needs.",
    link: {
      label: "+20 2 2345 6789",
      href: "tel:+20222456789",
    },
  },
  {
    icon: BiMap,
    title: "Headquarters",
    description: "Visit us in Cairo or coordinate shipments from our office.",
    link: {
      label: "Cairo, Nile Delta Agricultural Zone, Egypt",
      href: "https://maps.google.com/?q=Cairo+Egypt",
    },
  },
];

export function ContactChannels() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Reach</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
            Multiple ways
          </h2>
          <p className="md:text-md">
            Pick the channel that works best for your business.
          </p>
        </div>
        <div className="grid grid-cols-1 items-start justify-start gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-4">
          {channels.map((channel) => (
            <div key={channel.title}>
              <div className="mb-5 md:mb-6">
                <channel.icon className="size-12" />
              </div>
              <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                {channel.title}
              </h3>
              <p className="mb-5 md:mb-6">{channel.description}</p>
              <a
                className="underline"
                href={channel.link.href}
                target={channel.link.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {channel.link.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactChannels;
