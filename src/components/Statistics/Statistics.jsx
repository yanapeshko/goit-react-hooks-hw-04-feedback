import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <ul className={s.box}>
      <h3 className={s.title}>Statistics</h3>
      <li className={s.category}>Good: {good}</li>
      <li className={s.category}>Neutral: {neutral}</li>
      <li className={s.category}>Bad: {bad}</li>
      <li className={s.category}>Total: {total}</li>
      <li className={s.category}>Positive feedback: {positivePercentage}</li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
