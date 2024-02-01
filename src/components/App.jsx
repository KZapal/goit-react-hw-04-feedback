import React, { useState } from 'react';
import css from './App.module.css';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = state => {
    setFeedback(prevState => ({
      ...prevState,
      [state]: prevState[state] + 1,
    }));
  };

  const countTotalFeedback = () => {
    let total = feedback.good + feedback.neutral + feedback.bad;
    return Number(total);
  };

  const countPostitiveFeedbackPercentage = () => {
    return Math.round((Number(feedback.good) / countTotalFeedback()) * 100);
  };

  return (
    <div className={css.window}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={countTotalFeedback()}
            positivePercentage={countPostitiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
};

export default App;
