import React from 'react';

const DropDwon = () => {
    return (
      <>
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li>
          <a>Settings</a>
        </li>
        <li>
          <a>Logout</a>
        </li>
      </>
    );
};

export default DropDwon;