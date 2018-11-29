import React from 'react';

import { repeat } from '../modules/helpers';

const Hearts = ({count}) => (
  <div className="hearts-container">
    {repeat(count, index => <div className="heart" key={index}></div>)}
  </div>
);
export default Hearts;
