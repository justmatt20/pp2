import React, {useState, useEffect} from 'react';
import {css} from "@emotion/css";
const OpenAI = require('openai-api');
require('dotenv').config();


export default function Code() {



const openai = new OpenAI(process.env.REACT_APP_OPENAI_API_KEY);

const [data, setData] = useState('');
const [query, setQuery] = useState();
const [search, setSearch] = useState();
const [isLoading, setIsLoading] = useState(false);


useEffect(() => {(async () => {
  if (search) {
    setIsLoading(true)
    const gptResponse = await openai.complete({
        engine: 'davinci',
        prompt: `Create a React class component using the following information:\n${query}\nThe React class component I created is:\n`,
        maxTokens: 190,
        temperature: 1,
        topP: 0.35,
        presencePenalty: 0.5,
        frequencyPenalty: 0.19,
        bestOf: 1,
    })
   
    const data = gptResponse.data.choices[0].text;
    setData(data);
    setIsLoading(false)
   console.log(gptResponse.data)
   console.log(data)
   
}})();

}, [search]);

// buttonClick = () => {
//   e.preventDefault()
//   e => setQuery(e.target.value)
// }
  return (
   
    <div className="App">
      <div>
      <textarea className={css `
      width: 40vw;`}
      placeholder="ex. build an app that says 'Hooli' with an input field.  Add two buttons, one that says 'Hooli Search' and one that says 'I'm feeling Unlucky'"
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button
          type="button"
          onClick={() =>
            setSearch(query)
          }
        >
          Generate
        </button>

          {/* <h4>Here's some code we generated for you:</h4>   */}
          {isLoading ? (
            <div>Generating your code...</div>
         ) : (
           <span>
           {data}
           </span>
           )}
           
      </div>
      <button>Save Code</button>

      <div>
        <p className="tip">Remember to thoroughly read through your code.  Check and edit it in the sandbox.</p>
      </div>
     
    </div>
  );
}