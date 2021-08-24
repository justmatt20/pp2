import React, {useState, useEffect} from 'react';
import {css} from "@emotion/css";
import db from '../firebase';
import firebase from 'firebase';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const OpenAI = require('openai-api');
require('dotenv').config();


export default function Code({channelId}) {



const openai = new OpenAI(process.env.REACT_APP_OPENAI_API_KEY);



const [data, setData] = useState( '');
const [query, setQuery] = useState();
const [search, setSearch] = useState();
const [isLoading, setIsLoading] = useState(false);
const [text, setText] = useState("");
// const [isCopied, setIsCopied] = useState(false);

useEffect(() => {(async () => {
    if (search) {
      setIsLoading(true)
      const gptResponse = await openai.complete({
          engine: 'davinci',
          prompt: `Use the information to write a friendly cold sales email:\n\"\"\"\n${query}\n\"\"\"\nThe cold email I wrote is:\n\"\"\"\n`,
          maxTokens: 240,
          temperature: 0.7,
          topP: 1,
          presencePenalty: 0,
          frequencyPenalty: 0.25,
          stop: ["\"\"\""]
      })
     
      const data = gptResponse.data.choices[0].text;
      setData(data);
      setIsLoading(false)
     console.log(gptResponse.data)
     console.log(data)
     
  }})();
  // setQuery('')
  }, [search]);
  
  function getCode(e){
    e.preventDefault();
    setSearch(query)
  }

  const saveEmail = (e) => {
    e.preventDefault();
    if (channelId) {
        db.collection('channels')
        .doc(channelId)
        .collection('emails').add({
        email: text,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
    }
    setText(data)
}

// const onCopyText = () => {
//   setIsCopied(true);
//   setTimeout(() => {
//     setIsCopied(false);
//   }, 1000);
// };

return (
        
    <div className={css `width: 100vw; height: 50vh; display: grid; justify-content: center; align-items: center;`}>
      <div className={css `margin-top: 2rem; align-items: center;`}>
        <h2>What would you like your email to say?</h2>
      <textarea 
      className={css `width: 50vw; height: 4rem; `}
      placeholder="Tell Jeff congrats on his first mission to space. Would love to know how it felt to go that fast. Ask if he is looking for help to redesign rockets."
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <div className={css `width: 100%; display: grid; align-items: center; justify-content: center; margin-top: 2rem;`}>
        <button  className={css ``} onClick={getCode}>
          Generate
        </button>
        </div>
        
        </div>
         
          
          {isLoading ? (
            <div>Generating your message...</div>
         ) : (
           <span   className={css `height: 40vh; width: 50vw; display: grid; align-items: center;`}>
           {data}
           
           </span>
           )}
        
     

      <div className={css `width: 100%; display: grid; align-items: center; justify-content: center; margin-top: 2rem;`}>
      <button onClick={saveEmail}>Save Email</button>
      </div>
     
    </div>
  );
}



