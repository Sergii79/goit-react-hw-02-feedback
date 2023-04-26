import { Component } from 'react';
import { FeedbackButton } from "../FeedbackButton/FeedbackButton";
import { FeedbackStatistics } from "../FeedbackStatistics/FeedbackStatistics";



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
    
    render() {
        const { good, neutral, bad } = this.state;
        const options = Object.keys(this.state);
        
        return (
            <div>
                <h2>Please leave feedback</h2>
                <FeedbackButton
                    options={options}
                    onChangeFeedback={this.onChangeFeedback} />
                <h2>Statistics</h2>
                <FeedbackStatistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    // total={this.countTotalFeedback()}
                    // positivePercentage={this.countPositiveFeedbackPercentage()}
                />
            </div>
        )
    }
}


// export const FeedbackCard = () => {
//     return (

        

//         <div>
//             <h2>Please leave feedback</h2>
//             <div>
//                 <button>Good</button>
//                 <button>Neutral</button>
//                 <button>Bad</button>                
//             </div>
//             <h2>Statistics</h2>
//             <div>
//                 <span>Good:</span>
//                 <span>Neutral:</span>
//                 <span>Bad:</span>
//             </div>
//         </div>
//     )
// };