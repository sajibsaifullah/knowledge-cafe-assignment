import React from "react";

const Faq = () => {
  return (
    <div className="container mx-auto px-5 py-5 text-justify">
      <h3 className="text-3xl font-semibold text-center text-red-500 py-5">Frequently Asked Questions</h3>
      <div>
        <h4 className="text-xl font-bold">
          Q1: Write down the differences between props and state?
        </h4>
        <p className="ps-2 pb-3">
          <span className="font-semibold">Ans:</span> Props are short for
          properties and represent the input data that a parent component passes
          to a child component. Props are read-only and cannot be modified by
          the child component.
          <br />
          state represents the internal data managed by a component itself.
          state can be updated by calling the setState method.
        </p>
      </div>
      <div>
        <h4 className="text-xl font-bold">Q2: How does useState works?</h4>
        <p className="ps-2 pb-3">
          <span className="font-semibold">Ans:</span>
          useState is a hook in React that allows functional components to
          manage their own state. It takes an initial value as an argument and
          returns an array with two elements: the current state value and a
          function to update the state.
        </p>
      </div>
      <div>
        <h4 className="text-xl font-bold">
          Q3: Without data loading, what's the others functions of useEffect?
        </h4>
        <p className="ps-2 pb-3">
          <span className="font-semibold">Ans:</span>
          useEffect is used to manage side effects in functional components.
          Besides data loading, it can also be used for component
          initialization, updating the DOM, cleanup, and managing animations.
        </p>
      </div>
      <div>
        <h4 className="text-xl font-bold">Q4: How does react work?</h4>
        <p className="ps-2 pb-3">
          <span className="font-semibold">Ans:</span>
          React is a JavaScript library that uses components, JSX, a Virtual
          DOM, and reconciliation to efficiently render user interfaces. It
          follows a one-way data flow model and is used to build complex
          applications with dynamic user interfaces.
        </p>
      </div>
    </div>
  );
};

export default Faq;
