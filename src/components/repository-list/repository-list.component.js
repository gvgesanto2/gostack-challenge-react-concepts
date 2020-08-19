import React from 'react';

import './repository-list.styles.css';

import Repository from '../repository/repository.component';

function RepositoryList({ repositories, saveCallback, removeCallback }) {
  console.log('repos: ', repositories);
  return (
    <div>
      <ul data-testid="repository-list">
        {repositories &&
          repositories.map((repo) => (
            <Repository
              key={repo.id}
              repository={repo}
              removeCallback={removeCallback}
            />
          ))}
      </ul>

      <button className="repository-list__button" onClick={saveCallback}>
        Adicionar
      </button>
    </div>
  );
}

export default RepositoryList;
