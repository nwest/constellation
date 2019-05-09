export const reducer = (state: any = { repos: [] }, action: any) => {
    if (action.repos !== undefined) {
        return { repos: [...action.repos] };
    }
    return state;
};
