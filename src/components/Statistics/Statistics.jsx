import React from 'react';

export const Statistics = ({ good, neutral, bad }) => (
  <div>
    <h2>Statistics</h2>
    <div>
      Good: <span>{good}</span>
    </div>
    <div>
      Neutral: <span>{neutral}</span>
    </div>
    <div>
      Bad: <span>{bad}</span>
    </div>
    <div>
      Total: <span>total</span>
    </div>
    <div>
      Positive feedback: <span></span>
    </div>
  </div>
);
