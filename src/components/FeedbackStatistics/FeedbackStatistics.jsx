import PropTypes from 'prop-types';
import { StatisticText } from "./FeedbackStatistics.styled";

export const FeedbackStatistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <StatisticText>Good: {good}</StatisticText>
      <StatisticText>Neutral: {neutral}</StatisticText>
      <StatisticText>Bad: {bad}</StatisticText>
      <StatisticText>Total: {total}</StatisticText>
      <StatisticText>Positive feedback: {positivePercentage}%</StatisticText>
    </>
  );
};

FeedbackStatistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};