import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { GlobalStyles } from './GlobalStyles';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleFeedback = (type) => {
  this.setState((prevState) => ({
    [type]: prevState[type] + 1,
  }));
};

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positivePercentage = total > 0 ? Math.round((good / total) * 100) : 0;
    const feedbackOptions = ['good', 'neutral', 'bad'];


    return (
      <div>
        <Section>
          <FeedbackOptions options={feedbackOptions} onLeaveFeedback={this.handleFeedback} />
        </Section>
        <Section>
          {total > 0 ? (
            <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
        <GlobalStyles></GlobalStyles>
      </div>
    )
  };
}
