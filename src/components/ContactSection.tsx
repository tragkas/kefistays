"use client";

import { useEffect } from "react";

// Extend the Window interface to include Tally load function
declare global {
  interface Window {
    Tally: {
      loadEmbeds: () => void;
    };
  }
}

const ContactSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    script.onload = () => {
      if (window.Tally) {
        window.Tally.loadEmbeds();
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="max-w-3xl mx-auto px-4 py-16">
      <div className="bg-gray-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Επικοινώνησε Μαζί μας</h2>
          <p className="text-lg text-gray-600">
            Συμπλήρωσε τη φόρμα και θα επικοινωνήσουμε μαζί σου μέσα σε 24 ώρες
          </p>
        </div>
        <iframe
          data-tally-src="https://tally.so/embed/31RPV4?hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="50"
          title="Contact Form"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactSection;
