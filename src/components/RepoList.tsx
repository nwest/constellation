import React from "react";
import IRepo from "../models/repo";
import { connect } from "react-redux";

interface IRepoList {
    repos: IRepo[]
}

const RepoList: React.FC<IRepoList> = ({ repos }) => {
    return (
        <div>
            { repos.map( repo => {
                return <h1 key={repo.id}>{ repo.full_name }</h1>
            }) }
        </div>
    );
};

const mapStateToProps = (state: { repos: any; }) => {
    return { repos: state.repos };
}

export default connect(mapStateToProps)(RepoList);;
