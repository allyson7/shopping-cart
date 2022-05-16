import React from 'react';

import './styles.css';

export function Button(props) {
  return (
    <button className="button">
      {props.children}
    </button>
  );
}
