import { useState } from "react";

const Rate = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <>
      <div>
        <Rate onClick={() => {setGood(good + 1); setTotal(total + 1)} } text="Good" />
        <Rate onClick={() => {setNeutral(neutral + 1); setTotal(total + 1)}} text="Neutral" />
        <Rate onClick={() => {setBad(bad + 1); setTotal(total + 1)}} text="Bad" />
      </div>
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total votes: {total}</p>
        <p>Average: { (good - bad) / total }</p>
        <p>Positive: { (good / total) * 100 }%</p>
      </div>
    </>
  );
};

export default App;
