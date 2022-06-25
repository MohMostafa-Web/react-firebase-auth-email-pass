import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser } = useAuthContext();
  const navigate = useNavigate();

  /* Create async function to handle submission */
  /** using try{}catch(err){} & await */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(email, password);
      navigate("/account"); // Go to account page
    } catch (err) {
      // console.log(err.code); // debug
      // console.log(err.message); // debug
      setError(err.message);
    }
  };
  
  /** using then().catch() */
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setError("");
  //   createUser(email, password)
  //     .then(() => {
  //       navigate("/account"); // Go to account page
  //     })
  //     .catch((err) => {
  //       // console.log(err.code); // debug
  //       // console.log(err.message); // debug
  //       setError(err.message);
  //     });
  // };

  /* using useEffect() to run errorMsgTimer if state "error" changes */
  useEffect(() => {
    const errorMsgTimer = setTimeout(() => {
      setError("");
    }, 10000)
    return () => {
      clearTimeout(errorMsgTimer);
    }
  }, [error]);

  return (
    <div className="max-w-[700px] p-4 mx-auto my-16">
      <h2 className="py-2 text-2xl font-bold">Sign up for a free account</h2>
      <p className="py-2">
        Already have an account?{" "}
        <Link to="/" className="underline hover:text-blue-400">
          Sign in.
        </Link>
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col my-2">
          <label className="py-3 font-medium" htmlFor="signup-email">
            Email Address
          </label>
          <input
            className="p-3 border"
            type="email"
            name="signup-email"
            id="signup-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col my-2">
          <label className="py-3 font-medium" htmlFor="signup-pass">
            Password
          </label>
          <input
            className="p-3 border"
            type="password"
            name="signup-pass"
            id="signup-pass"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <span className="text-red-500 text-l">{error}</span>}
        <button
          type="submit"
          className="w-full p-4 my-2 bg-blue-600 hover:bg-blue-500 text-white border border-blue-500"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
