import React from "react";

const UserInfo = (props) => {
    console.log("🚀 ~ file: UserInfo.js ~ line 4 ~ UserInfo ~ props", props)
    const { user } = props;
    const { fullName, email, address } = user;

    return (
        <div className="card">
            <h1>{fullName}</h1>
            <h3>{email}</h3>
            <p>{address}</p>
        </div>
    )
}

export default UserInfo;