import { signOut } from "@/lib/auth-client";


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
        <button
          onClick={() => {
            signOut();
          }}
        >
          Logout
        </button>
      </li>
    </>
  );
};

export default DropDwon;
