import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleFAQ = () => {
    setExpanded(!expanded);
  };

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        aria-expanded={expanded}
        onClick={toggleFAQ}
      >
        <span className="flex-1 text-base-content">{question}</span>
        <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${expanded ? 'rotate-90' : ''}`} />
        </svg>
      </button>
      <div
        className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden"
        style={{ maxHeight: expanded ? '1000px' : '0' }}
      >
        <div className="pb-5 leading-relaxed">
          <div className="space-y-2 leading-relaxed">{answer}</div>
        </div>
      </div>
    </li>
  );
};

const Faqs = () => {
    return (
      <div className="py-12 px-8 mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">Platform FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">Frequently Asked Questions</p>
        </div>
        <ul className="basis-1/2">
          <FAQItem
            question="What is an online community platform?"
            answer="An online community platform is a digital space where people with shared interests, goals, or identities come together to interact, share knowledge, collaborate, and build relationships. It serves as a virtual hub for fostering connections and facilitating communication among community members."
          />
          <FAQItem
            question="Why should i join an online community platform?"
            answer="Joining an online community platform offers numerous benefits, including:

            Access to a supportive network of like-minded individuals
            Opportunities for learning, sharing knowledge, and skill development
            Collaboration on projects or initiatives
            Engagement in discussions and activities relevant to your interests or profession
            Connection with experts and mentors in your field
            Exposure to diverse perspectives and ideas."
          />
          <FAQItem
            question="How do i join an online copmmunity platform?"
            answer="To join our online community platform, simply visit our website and sign up for an account. Registration is typically free and only requires basic information such as your name, email address, and a chosen username/password. Once registered, you'll gain access to all the features and resources available within the community."
          />
        </ul>
      </div>
    );
  };

  export default Faqs