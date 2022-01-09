import React, { useState } from 'react';
import data from './data';
function App() {
  const[count, setCount] = useState(0);
  const [text, setText] = useState([]);
  // console.log(text);

  const handleSubmit = (e)=>{
    e.preventDefault();
    let amount = parseInt(count);
    
    if(count<= 0){
        amount = 1;

    }

    if(count > 8){
      amount = 8;
    }
    setText(data.slice(0,amount));
    
    
  }
  console.log(text);
  // console.log(amount);
  
  return (
  <section className = "section-center">
      <h3>Tired of boring Lorem Ipsum?</h3>
      <form className ="lorem-form" onSubmit = {handleSubmit}>
        <label>
          Paragraphs:
        </label>
        <input type = "number" value = {count} name = "amount" id = "amount" onChange = {(e)=>setCount(e.target.value)}/>
        <button type = "submit" className = "btn">
          generate
        </button>
      </form>
      <article className = "lorem-text">
         {text.map((item,id)=> <p>{item}</p>)}
      </article>
  </section>
    )
}

export default App;
