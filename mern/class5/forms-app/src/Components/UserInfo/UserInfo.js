import React from "react";

const UserInfo = (props) => {

    const { fullName, email } = props.user

    return(
        <div>
            <h1>{fullName}</h1>
            <h3>{email}</h3>
        </div>
    )

}

export default UserInfo;