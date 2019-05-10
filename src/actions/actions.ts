import IRepo from "../models/repo";

export const newRepos = (repos: IRepo[]) => {
    return {
        type: "NEWREPOS",
        repos: repos
    }
};
