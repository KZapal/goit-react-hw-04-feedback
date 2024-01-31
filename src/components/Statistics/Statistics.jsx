import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <ul className={css.statistics}>
        <li className={css.statisticsListItem}>Good: {good}</li>
        <li className={css.statisticsListItem}>Neutral: {neutral}</li>
        <li className={css.statisticsListItem}>Bad: {bad}</li>
        <li className={css.statisticsListItem}>Total: {total}</li>
        <li className={css.statisticsListItem}>
          Positive feedback: {positivePercentage} %
        </li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
