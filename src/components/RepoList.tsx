import React from "react";
import IRepo from "../models/repo";
import { connect } from "react-redux";

interface IRepoList {
    repos: IRepo[]
}

const RepoList: React.FC<IRepoList> = ({ repos }) => {
    return (
        <div>
            {repos.map( repo => {
                    return <div key={repo.id}><a href={repo.html_url}>{ repo.full_name }</a><br/></div>
                })
            }
        </div>
    );
};

const mapStateToProps = (state: { repos: any; }) => {
    return { repos: state.repos };
}

export default connect(mapStateToProps)(RepoList);;
