import PropTypes from 'prop-types';
import { StatisticList, StatisticItem } from './Statistics.stylized';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <StatisticList>
    <StatisticItem>Good: {good}</StatisticItem>
    <StatisticItem>Neutral: {neutral}</StatisticItem>
    <StatisticItem>Bad: {bad}</StatisticItem>
    <StatisticItem>Total: {total}</StatisticItem>
    <StatisticItem>
      Positive feedback:{' '}
      {Number.isNaN(positivePercentage)
        ? 0
        : Math.round(positivePercentage).toFixed()}
      %
    </StatisticItem>
  </StatisticList>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
