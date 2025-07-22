import React from "react";
import { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const passwordRef = useRef(null);
  const iconRef = useRef(null);

  const [form, setForm] = useState({ Password: "", website: "", username: "" });
  const [passwordArray, setpassword] = useState([]);

  const getpassword = async () => {
    let req = await fetch("http://localhost:3000");
    let password = await req.json();
    console.log(password);
    setpassword(password)
  };

  useEffect(() => {
    getpassword();
  }, []);

  const showPassword = () => {
    const input = passwordRef.current;
    const icon = iconRef.current;

    if (input.type === "password") {
      input.type = "text";
      icon.src = "hide.png";
    } else {
      input.type = "password";
      icon.src = "eye.png";
    }
  };

  let savePassword = async () => {

    if (form.website === "" || form.username === "" || form.Password === "" ) {
      alert("Please fill all the fields");
      return;  
    } else if (form.Password.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    } else {
        //  e.preventDefault(); // prevent form from reloading the 
        await fetch("http://localhost:3000/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: form.id }) })

    await fetch("http://localhost:3000/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, id: uuidv4() }) })
    // localStorage.setItem("Password", JSON.stringify(updatedPasswords));
    setForm({
      website: "",
      username: "",
      Password: "", // Use lowercase if you've already changed from "Password"
    });
    }

   
  };
  let deletedPassword = async(id) => {
    const c = confirm("Do you confirm this password deleted?");
    if (c) {
      const deletedPasswords = passwordArray.filter((items) => items.id !== id);
      setpassword(deletedPasswords); // update state
        await fetch("http://localhost.3000/", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
      // localStorage.setItem("Password", JSON.stringify(deletedPasswords));
      console.log("deleting password with ", id);
    }
  };

  let editPassword = (id) => {
    setForm({...passwordArray.filter((items) => items.id === id)[0],id:id});
    const updatedPasswords = passwordArray.filter((items) => items.id !== id);
    setpassword(updatedPasswords); // update state
    // localStorage.setItem("Password", JSON.stringify(updatedPasswords));
    console.log("Editing password", id);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  return (
    <>
      <div className="min-h-[81.5vh]">
        <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md justify-self-center-safe">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Create an Account
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Website
              </label>
              <input
                value={form.website}
                onChange={handleChange}
                type="text"
                id="website"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                value={form.username}
                onChange={handleChange}
                type="text"
                id="username"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="flex items-center gap-2">
                <input
                  value={form.Password}
                  onChange={handleChange}
                  type="password"
                  id="Password"
                  ref={passwordRef}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <img
                  ref={iconRef}
                  onClick={showPassword}
                  src="eye.png"
                  alt=""
                  className="h-5 w-5 cursor-pointer mt-1"
                />
              </div>
            </div>

            <div>
              <button
                onClick={savePassword}
                type=""
                className="justify-self-center-safe h-10 font-bold bg-cyan-600 py-2 px-3 rounded-xl flex justify-center gap-2 hover:bg-blue-600 transition duration-200"
              >
                <lord-icon
                  src="https://cdn.lordicon.com/tewlfgbl.json"
                  trigger="loop"
                  state="loop-oscillate-alt"
                ></lord-icon>
                <span>Submit</span>
              </button>
            </div>
          </form>

          <p className="mt-4 text-sm text-gray-600 text-center">
            Already have an account?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Log in
            </a>
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
          <div className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xl font-semibold">
            PasswordManager
          </div>
          {passwordArray.length === 0 && <div>No password</div>}
          {passwordArray.length != 0 && (
            <table className="min-w-full leading-normal">
              <thead>
                <tr className="bg-indigo-100 text-indigo-800 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Website</th>
                  <th className="py-3 px-6 text-left">Username</th>
                  <th className="py-3 px-6 text-left">Password</th>
                  <th className="py-3 px-6 text-left">Action</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm font-medium">
                {passwordArray.map((items, index) => {
                  return (
                    <tr
                      key={index}
                      className="border-b hover:bg-indigo-50 transition duration-200"
                    >
                      <td className="py-3 px-6">
                        <a
                          href="{items.website}"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {items.website}
                        </a>
                      </td>
                      <td className="py-3 px-6">{items.username}</td>
                      <td className="py-3 px-6">{items.Password}</td>
                      <td className="py-3 px-7 cursor-pointer ">
                        <lord-icon
                          onClick={() => {
                            editPassword(items.id);
                          }}
                          src="https://cdn.lordicon.com/cbtlerlm.json"
                          trigger="hover"
                          delay="1000"
                          stroke="bold"
                          state="hover-line"
                          colors="primary:#000000,secondary:#0a4e5c,tertiary:#ebe6ef,quaternary:#f9c9c0,quinary:#000000"
                          style={{ width: "20px", height: "20px" }}
                        ></lord-icon>
                        <lord-icon
                          className="mx-2"
                          onClick={() => {
                            deletedPassword(items.id);
                          }}
                          src="https://cdn.lordicon.com/xyfswyxf.json"
                          trigger="hover"
                          style={{ width: "20px", height: "20px" }}
                        ></lord-icon>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
