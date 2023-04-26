import PropTypes from 'prop-types';

export const FeedbackButton = ({ options, onChangeFeedback }) => {
  return options.map(item => {
    return (
      <button type="button" key={item} onClick={onChangeFeedback}>
        {item}
      </button>
    );
  });
};

FeedbackButton.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onChangeFeedback: PropTypes.func.isRequired,
};