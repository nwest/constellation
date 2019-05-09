import React from 'react';
import './App.css';
import UsernameInput from "./components/UsernameInput";
import RepoList from "./components/RepoList";

const App: React.FC = () => {
  return (
      <div className="App">
          See your Starred Repos:
          <UsernameInput />
          <RepoList />
      </div>
  );
};

export default App;
