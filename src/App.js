import './App.css';
import React, { useState } from 'react';

// assigning App with two statehooks for  showcarrd and target
function App() {
  const [showCard, setShowCard] = useState(false);
  const [target, setTarget] = useState(undefined);
  console.log(target + 1);
  // the props are passed in the rating component. If the state of showcard changes to wrong thank you card is showen
  return (
    <div className="card">
      {!showCard ? (
        <Rating
          target={target}
          setTarget={setTarget}
          showCard={showCard}
          setShowCard={setShowCard}
        />
      ) : (
        <ThankYouCard rating={target + 1} />
      )}
    </div>
  );
}

// created a component rating and have inside two componentens numbers and button to handle the first card
function Rating(props) {
  const { target, setTarget, showCard, setShowCard } = props;
  const divsArr = [0, 1, 2, 3, 4];
  const orange = 'hsl(25, 97%, 53%)';
  const grey = 'hsl(216, 12%, 54%)';

  return (
    <div className="container">
      <img src="./icon-star.svg" alt="start icon" />
      <h1 className="question">How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div id="numbers">
        {divsArr.map((index) => (
          <Number
            key={index.toString()}
            index={index}
            target={target}
            setTarget={setTarget}
            orange={orange}
            grey={grey}
          />
        ))}
      </div>
      <Button
        setShowCard={setShowCard}
        showCard={showCard}
        rating={target + 1}
      />
    </div>
  );
}

//component to build numbers
function Number(props) {
  const { index, target, setTarget, orange, grey } = props;

  return (
    <div
      className="numbers"
      onClick={() => setTarget(index)}
      style={{
        backgroundColor: index === target ? orange : grey,
      }}
    >
      {index + 1}
    </div>
  );
}
//component for button
function Button(props) {
  return (
    <button className="btn" onClick={() => props.setShowCard(true)}>
      submit
    </button>
  );
}
//componennt thank you card

function ThankYouCard(props) {
  console.log(props.rating);
  return (
    <div className="thank-you-card">
      <img src="./illustration-thank-you.svg" alt="thank you "></img>
      <p>Thank you for your submission!</p>
      <p>You chose {props.rating} out of 5.</p>
      <p>We apreciate your feedback</p>
    </div>
  );
}

export default App;
