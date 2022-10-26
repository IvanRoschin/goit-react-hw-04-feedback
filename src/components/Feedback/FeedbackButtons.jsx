import React from 'react';

export const FeedbackButtons = ({
  goodIncrement,
  neutralIncrement,
  badIncrement,
}) => (
  <div>
    <button type="button" onClick={goodIncrement}>
      Good
    </button>

    <button type="button" onClick={neutralIncrement}>
      Neutral
    </button>

    <button type="button" onClick={badIncrement}>
      Bad
    </button>
  </div>
);
