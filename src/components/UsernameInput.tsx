import React from 'react';

interface IUsernameProps {
    fetchUsername: (username: string) => void;
};


const UsernameInput: React.FC<IUsernameProps> = ({ fetchUsername }) => {
    let input: HTMLInputElement | null;
    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (input === null || !input.value.trim()) {
                        return
                    }
                    const username = input.value.toString();
                    fetchUsername(username);
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

