import PropTypes from 'prop-types';
import { FeedbackBtn } from "./FeedbackButton.styled";

export const FeedbackButton = ({ options, onChangeFeedback }) => {
  return options.map(item => {
    return (
      <FeedbackBtn type="button" key={item} onClick={onChangeFeedback}>
        {item}
      </FeedbackBtn>
    );
  });
};

FeedbackButton.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onChangeFeedback: PropTypes.func.isRequired,
};