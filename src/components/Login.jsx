

const Login = () => {
      return (
            <div>
                  <div>
                        <div className=" shadow-lg px-8 py-10 bg-gradient-to-t rounded from-indigo-500  w-4/12 m-auto mt-40">
                              <form>
                                    <h1 className="py-5 text-center text-3xl font-bold">Login Page</h1>

                                    <div className="space-y-5">
                                          <input className="w-full py-2 px-2 rounded" type="email" placeholder="Email" />  <br />
                                          <input className="w-full py-2 px-2 rounded" type="password" placeholder="Password" /> <br />
                                          <input className="block m-auto bg-gradient-to-t rounded from-indigo-200 px-5 py-2 font-bold" type="submit" placeholder="Login" />
                                    </div>
                              </form>
                        </div>
                  </div>
            </div>
      );
};

export default Login;