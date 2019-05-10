import { AnyAction } from 'redux';

export const reducer = (state: any = { repos: [] }, action: AnyAction) => {
    switch (action.type) {
        case "NEWREPOS":
            return { repos: [...action.repos] }
        default:
            return state;
    }
};
