import { Component } from 'react';
import { FeedbackButton } from "../FeedbackButton/FeedbackButton";
import { FeedbackStatistics } from "../FeedbackStatistics/FeedbackStatistics";
import { Container, Title } from "./FeedbackCard.styled";




export class FeedbackCard extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    onChangeFeedback = e => {
        this.setState(prevState => ({
            [e.target.textContent]: prevState[e.target.textContent] + 1,
        }));
    };

    countTotalFeedback = () => {
        return Object.values(this.state).reduce(
            (total, item) => (total += item),
            0
        );
    };

    countPositiveFeedbackPercentage = () => {
        return this.countTotalFeedback() === 0
            ? 0
            : Number(
          ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0)
        );
    };
    
    render() {
        const { good, neutral, bad } = this.state;
        const options = Object.keys(this.state);
        console.log(options);
        
        return (
            <Container>                
                <Title>Please leave feedback</Title>
                <FeedbackButton
                    options={options}
                    onChangeFeedback={this.onChangeFeedback} />
                <Title>Statistics</Title>
                <FeedbackStatistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={this.countTotalFeedback()}
                    positivePercentage={this.countPositiveFeedbackPercentage()}
                />                
            </Container>
        )
    }
}
