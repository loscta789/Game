import React, { useRef } from 'react';

const ScrollToContentButton = () => {
  const contentRef = useRef(null);

  const scrollToContent = () => {
    contentRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex justify-center mt-4">
      <button onClick={scrollToContent} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Charger le contenu
      </button>
      <div ref={contentRef} />
    </div>
  );
};

export default ScrollToContentButton;
