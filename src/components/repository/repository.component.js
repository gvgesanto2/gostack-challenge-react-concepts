import React from 'react';

import './repository.styles.css';

function Repository({ repository, removeCallback }) {
  return (
    <li className="repository">
      {repository.title}
      <button
        className="repository__button"
        onClick={() => removeCallback(repository.id)}
      >
        Remover
      </button>
    </li>
  );
}

export default Repository;
