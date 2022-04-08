import { useState } from "react";

const Rate = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const Statistics = ({ text, rate }) => {
  return (
    <p>
      {text}: {rate}
    </p>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <>
      <div>
        <Rate
          onClick={() => {
            setGood(good + 1);
            setTotal(total + 1);
          }}
          text="Good"
        />
        <Rate
          onClick={() => {
            setNeutral(neutral + 1);
            setTotal(total + 1);
          }}
          text="Neutral"
        />
        <Rate
          onClick={() => {
            setBad(bad + 1);
            setTotal(total + 1);
          }}
          text="Bad"
        />
      </div>
      {total === 0 ? (
        <span>Not feedback given</span>
      ) : (
        <>
          <Statistics text="Good" rate={good} />
          <Statistics text="Neutral" rate={neutral} />
          <Statistics text="Bad" rate={bad} />
          <Statistics text="Total" rate={total} />
          <p>Average: {(good - bad) / total}</p>
          <p>Positive: {(good / total) * 100}%</p>
        </>
      )}
    </>
  );
};

export default App;
