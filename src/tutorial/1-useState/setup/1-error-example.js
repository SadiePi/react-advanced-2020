import React from "react";

const ErrorExample = () => {
  let title = "random title";

  function handleClick() {
    title = "hello people";
    console.log(title);
  }

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
