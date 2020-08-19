import React, { useState, useEffect } from 'react';

import './styles.css';

import api from './services/api';
import RepositoryList from './components/repository-list/repository-list.component';

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api
      .get('/repositories')
      .then((response) => {
        setRepositories(response.data);
      })
      .catch((error) => {
        console.log(`Failed to get the repositories list\n\nError: ${error}`);
      });
  }, []);

  async function handleAddRepository() {
    try {
      const response = await api.post('/repositories', {
        title: `New Repository ${Date.now()}`,
        url: 'http://github.com/testing-new-repo',
        techs: ['NodeJS', 'ReactJS', 'GraphQL']
      });

      const newRepository = response.data;

      setRepositories([...repositories, newRepository]);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleRemoveRepository(repositoryId) {
    try {
      await api.delete(`/repositories/${repositoryId}`);

      const remainingRepos = repositories.filter(
        (repo) => repo.id !== repositoryId
      );

      setRepositories(remainingRepos);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <RepositoryList
      repositories={repositories}
      saveCallback={handleAddRepository}
      removeCallback={handleRemoveRepository}
    />
  );
}

export default App;
