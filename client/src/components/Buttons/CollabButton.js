import React, { useState, useEffect } from "react";

const CollabButton = (userIsCreator) => {
  const [userBoolean, setUserBoolean] = useState(false);
  console.log(userIsCreator);
  const [button1] = useState(
    <button className="buttonAccept1">Accepted</button>
  );

  const [button2] = useState(
    <button className="buttonAccept2">Pending</button>
  );
  function IsCreator(props) {
    return <div>
    <button className="btn" onClick={() => setUserBoolean(!userBoolean)}>
      {userBoolean ? button1 : button2}
    </button>
  </div>;
  }
  function NotCreator(props) {
    return  <div>{userBoolean ? button1 : button2}</div>;
  }
  if (userIsCreator===true) {
    return <NotCreator />;
  }else{
    return <IsCreator />;
    }
};
 

export default CollabButton;
