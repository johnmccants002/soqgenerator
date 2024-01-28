"use client";

import React, { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "How does the statement generator work?",
    answer:
      "Our tool uses advanced AI algorithms to analyze your input and generate a tailored statement of qualifications.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Yes, we take privacy seriously and ensure that all data is encrypted and securely stored.",
  },
  // Add more FAQs as needed
];

const FAQs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800">
          Frequently Asked Questions
        </h2>
        <div className="mt-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 mb-4">
              <h3
                className="text-lg font-semibold text-gray-800 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
              </h3>
              <p
                className={`mt-2 text-gray-600 ${
                  activeIndex === index ? "block" : "hidden"
                }`}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
