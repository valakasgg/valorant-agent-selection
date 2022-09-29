import React, { useEffect, useState } from "react";

export default function UserList() {
    const apiURL = "https://valorant-api.com/v1/agents";

    const onClickHandler = () => {
        getAgents();
    }

    const getAgents = async () => {
        const response = await fetch(apiURL);

        console.log(response);
    }

    return (
        <div>
            <button onClick={onClickHandler}>Agents</button>
        </div>
    )
}