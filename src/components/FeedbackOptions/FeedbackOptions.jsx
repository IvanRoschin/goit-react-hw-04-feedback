import PropTypes from 'prop-types';
import { ButtonContainer, Button } from './FeedbackOptions.stylized';

export const FeedbackOptions = ({ increment }) => (
  <ButtonContainer>
    <Button name="good" type="button" onClick={increment}>
      Good
    </Button>
    <Button name="neutral" type="button" onClick={increment}>
      Neutral
    </Button>
    <Button name="bad" type="button" onClick={increment}>
      Bad
    </Button>
  </ButtonContainer>
);

FeedbackOptions.propTypes = {
  increment: PropTypes.func.isRequired,
};
