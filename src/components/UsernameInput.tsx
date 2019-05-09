import React from 'react';
import IRepo from "../models/repo";

const newRepos = (repos: IRepo[]) => {
    return {
        type: "NEWREPOS",
        repos: repos
    }
};

const UsernameInput: React.FC = () => {
    let input: HTMLInputElement | null;
    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (input === null || !input.value.trim()) {
                        return
                    }
                    // console.log(`entered: ${input.value}`);


                }}>

                <input ref={node => {
                    input = node;
                }}
                />
                <button type={"submit"}>Submit</button>
            </form>
        </div>
    );
};

export default UsernameInput;
