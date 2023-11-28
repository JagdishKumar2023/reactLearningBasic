import React from "react";

function Form() {
  return (
    <div>
      <form action="#">
        <input type="text" placeholder="name" />
        <input type="email" placeholder="email" />
        <input type="tel" placeholder="phone" />
        <input type="password" placeholder="password" />
        <input type="text" placeholder="Gender" />
        <input type="text" placeholder="CollageName" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
