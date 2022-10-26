import React from 'react';

export const FeedbackOptions = ({ increment }) => (
  <div>
    <button name="good" type="button" onClick={increment}>
      Good
    </button>

    <button name="neutral" type="button" onClick={increment}>
      Neutral
    </button>

    <button name="bad" type="button" onClick={increment}>
      Bad
    </button>
  </div>
);
