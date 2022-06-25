import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const Account = () => {
  const { user, setUser, logout } = useAuthContext();

  const navigate = useNavigate();
  
  /* Create function to handle logout */
  /** using try{}catch(err){} & await */
  const handleLogout = async () => {
    try {
      await logout();
      setUser(null); // empty state "user"
      navigate("/"); // Go to Home page
      console.log("You are logged out"); // debug
    } catch (err) {
      console.log(err.message);
    }
  };

  /** using then().catch() */
  // const handleLogout = () => {
  //   logout()
  //     .then(() => {
  //       setUser(null);
  //       navigate("/"); // Go to Home page
  //     })
  //     .catch((err) => console.log(err.message));
  // };


  return (
    <div className="max-w-[600px] p-4 mx-auto my-16">
      <h2 className="py-4 text-2xl font-bold">Account</h2>
      <p>User Email: {user && user.email}</p>
      <button
        type="button"
        className="px-6 py-2 my-4 border rounded-lg hover:bg-gray-50"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Account;
