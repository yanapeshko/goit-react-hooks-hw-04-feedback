import { useState } from 'react';
import Container from '../Container';
import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';
import Notification from '../Notification';
import './App.module.css';

const initialState = { good: 0, neutral: 0, bad: 0 };

export default function App() {
  const [state, setState] = useState({ ...initialState });

  const setStatistics = option => {
    setState({ ...state, [option]: state[option] + 1 });
  };

  const countTotalFeedback = () =>
    Object.values(state).reduce((acc, value) => acc + value, 0);

  const countPercentage = () =>
    `${Math.round((state.good / countTotalFeedback()) * 100)}%`;

  const options = Object.keys(state);
  const total = countTotalFeedback();
  const percent = countPercentage();
  const statistics = Object.entries(state);
  return (
    <Container title="Reviews widget">
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={setStatistics} />
      </Section>

      <Section title="Statistics">
        {total > 0 && (
          <Statistics
            statistics={statistics}
            total={total}
            positivePercentage={percent}
          />
        )}
        {!total > 0 && <Notification message="No feedback given" />}
      </Section>
    </Container>
  );
}
