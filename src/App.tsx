import React from 'react';
import './App.css';
import UsernameInput from "./components/UsernameInput";
import RepoList from "./components/RepoList";
import axios from 'axios';
import IRepo from "./models/repo";
import { ThunkDispatch } from "redux-thunk";
import { connect }from 'react-redux';
import { newRepos} from "./actions/actions";

interface IAppProps {
    loadNewRepos: (repos: IRepo[]) => void;
}

const App: React.FC<IAppProps> = ({ loadNewRepos }) => {
  return (
      <div className="App">
          See your Starred Repos:
          <UsernameInput fetchUsername={(username) => {
              axios.get(`https://api.github.com/users/${username}/starred`).then(response => {
                  const repos = response.data as IRepo[];
                  loadNewRepos(repos);
              });
          }}/>
          <RepoList />
      </div>
  );
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>): IAppProps => {
    return {
        loadNewRepos: (repos) => { dispatch(newRepos(repos)) }
    };
};

export default connect(() => {}, mapDispatchToProps)(App);
