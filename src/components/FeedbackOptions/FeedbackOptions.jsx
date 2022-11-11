import PropTypes from 'prop-types';
import { ButtonContainer, Button } from './FeedbackOptions.stylized';

export const FeedbackOptions = ({ options, handleCounter }) => (
  <ButtonContainer>
    {options.map(option => (
      <Button
        type="button"
        key={option}
        onClick={() => {
          handleCounter(option);
        }}
        name={option}
      >
        {option.toUpperCase()}
      </Button>
    ))}
  </ButtonContainer>
);

FeedbackOptions.propTypes = {
  handleCounter: PropTypes.func.isRequired,
  options: PropTypes.array,
};
