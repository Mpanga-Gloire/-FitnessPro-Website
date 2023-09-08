import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <article className="faq" onClick={() => setIsOpen((prev) => !prev)}>
      <div>
        <h4>{question}</h4>
        <button className="faq__icon">
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {isOpen && <p>{answer}</p>}
    </article>
  );
};

export default FAQ;
