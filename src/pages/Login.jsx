import React from "react";

const Login = () => {
  return (
    <>
      {" "}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">Login</div>

              <div className="card-body">
                <form method="POST" action="#">
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
