import React, { useState } from "react";

function ApiHandling() {

    const [usersList, setUsersList] = useState([]);

    const DUMMY_API = 'https://jsonplaceholder.typicode.com/posts';

    const apiPromise = fetch(DUMMY_API); // 'fetch' returns a promise
    // as soon as promise is fulfilled it fills the data in apiPromise

    apiPromise.then(
        res => res.json()
    ).then(
        (data) => {
            data.map((user) => {
                setUsersList([
                    ...usersList,
                    user.title
                ])
            })
        }
    ).catch(
        (err) => console.log(err)
    )

    // The .json() method is chained directly after response in the first .then() block.
    // The second .then() block handles the parsed JSON data and logs it.
    // The .catch() block remains for error handling.

    return (
        <>
            <p>Handling API using promise.</p>
            {usersList.slice(0, 10).map((title, index) => (
                <p key={index}>{index + 1}. {title}</p>
            ))}
        </>
    )
}

export default ApiHandling;
