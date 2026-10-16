import { signOut } from "@/lib/auth-client";
import Link from "next/link";
import { toast } from "react-toastify";

const DropDwon = () => {
  return (
    <>
      <li>
        <Link href="/profile" className="justify-between">
          Profile
          <span className="badge">New</span>
        </Link>
      </li>
      <li>
        <Link href="/setting">Settings</Link>
      </li>
      <li>
        <button
          onClick={async () => {
            try {
              await signOut();
              toast.success("SuccessFully Logouted");
            } catch {
              toast.error("Failed to log out!");
            }
          }}
        >
          Logout
        </button>
      </li>
    </>
  );
};

export default DropDwon;
