import React, { useState, useEffect } from "react";

const CollabButton = (userIsCreator) => {
  let [userBoolean, setUserBoolean] = useState(userIsCreator);
  console.log(userIsCreator);
  const [button1] = useState(
    <button className="buttonAccept1">Accepted</button>
  );

  const [button2] = useState(
    <button className="buttonAccept2">Pending</button>
  );

  return (
    <div>
      <button className="btn" onClick={() => setUserBoolean(!userBoolean)}>
        {userBoolean ? button1 : button2}
      </button>
    </div>
  );
};

export default CollabButton;
