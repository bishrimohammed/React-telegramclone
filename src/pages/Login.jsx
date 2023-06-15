import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLogin } from "../storeReduxToolkit/authSlice";
import env from "react-dotenv";
const Login = () => {
  const dispatch = useDispatch();
  const Auth = useSelector((state) => state.auth.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const URL = process.env.REACT_APP_server_URL;

  //  console.log(URL);
  const submitHandler = async (e) => {
    e.preventDefault();

    const Data = {
      email,
      password,
    };
    const res = await fetch(`${URL}/auth/login`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(Data),
    });
    const { user, token } = await res.json();
    dispatch(setLogin({ currentuser: user, token }));
    //console.log(Auth);
    // console.log(resdata);
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">Login</div>

              <div className="card-body">
                <form onSubmit={submitHandler}>
                  <div className="row mb-3">
                    <label className="col-md-4 col-form-label text-md-end">
                      Email Address
                    </label>

                    <div className="col-md-6">
                      <input
                        id="email"
                        type="email"
                        className="form-control "
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label className="col-md-4 col-form-label text-md-end">
                      Password
                    </label>

                    <div className="col-md-6">
                      <input
                        id="password"
                        type="password"
                        className="form-control "
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="row mb-0">
                    <div className="col-md-6 offset-md-4">
                      <button type="submit" className="btn btn-primary">
                        Login
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
