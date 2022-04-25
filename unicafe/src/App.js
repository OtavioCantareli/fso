import { useState } from "react";

const Rate = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const StatisticLine = ({ text, rate }) => {
  return (
    <p>
      {text}: {rate}
    </p>
  );
};

const Statistics = (props) => {
  const { good, neutral, bad, total } = props.props;
  return (
    <>
      <StatisticLine text="Good" rate={good} />
      <StatisticLine text="Neutral" rate={neutral} />
      <StatisticLine text="Bad" rate={bad} />
      <StatisticLine text="Total" rate={total} />
      <p>Average: {(good - bad) / total}</p>
      <p>Positive: {(good / total) * 100}%</p>
    </>
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
        <Statistics props={{ good, neutral, bad, total }} />
      )}
    </>
  );
};

export default App;
