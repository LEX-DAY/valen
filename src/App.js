import './App.css';
import { useState } from "react";

export default function App() {
    const [noCount, setNoCount] = useState(0);
    const [yesPressed, setYesPressed] = useState(false);
    const yesButtonSize = noCount * 20 + 16;
  
    const handleNoClick = () => {
      setNoCount(noCount + 1);
    };
  
    const getNoButtonText = () => {
      const phrases = [
        "No",
        "Are you sure?",
        "Really sure?",
        "Think again!",
        "Last chance!",
        "Surely not?",
        "You might regret this!",
        "Give it another thought!",
        "Are you absolutely certain?",
        "This could be a mistake!",
        "Have a heart!",
        "Don't be so cold!",
        "Change of heart?",
        "Wouldn't you reconsider?",
        "Is that your final answer?",
        "You're breaking my heart ;(",
      ];
  
      return phrases[Math.min(noCount, phrases.length - 1)];
    };
  
    return (
      <div className="block">
        {yesPressed ? (
          <div className='block_2'>
          <img className="image" src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <h1 className="text">Ok yay!!!</h1>
          </div>
        ) : (
          <div className='ask_btn'>
            <img className="image" src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif" />
            
            <div className='ask'>
              <h1 className="text">Will you be my Valentine?</h1>
              <div className='btn'>
                <button
                  className="btn_1"
                  style={{ fontSize: yesButtonSize }}
                  onClick={() => setYesPressed(true)}
                >
                  Yes
                </button>
                <button
                  onClick={handleNoClick}
                  className="btn-new"
                >
                  {noCount === 0 ? "No" : getNoButtonText()}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }