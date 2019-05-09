import React from "react";
import IRepo from "../models/repo";

export interface IRepoList {
    repos: IRepo[]
}

const RepoList: React.FC<IRepoList> = (props) => {
    return (
        <div>
            { props.repos.map( repo => {
                return <h1 key={repo.id}>{ repo.full_name }</h1>
            }) }
        </div>
    );
};

export default RepoList;
