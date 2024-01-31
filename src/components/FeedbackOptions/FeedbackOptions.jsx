import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <div className={css.feedbackButtons}>
        {options.map(option => {
          return (
            <button
              className={css.btn}
              type="button"
              onClick={() => onLeaveFeedback(option)}
              key={option}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.object),
  ]).isRequired,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
