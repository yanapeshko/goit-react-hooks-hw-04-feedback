import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({ statistics, total, positivePercentage }) {
  return (
    <ul className={s.box}>
      {statistics.map(([name, value]) => (
        <li>
          {name}: {value}
        </li>
      ))}
      <li className={s.category}>Total: {total}</li>
      <li className={s.category}>Positive feedback: {positivePercentage}</li>
    </ul>
  );
}

Statistics.propTypes = {
  statistics: '',
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
