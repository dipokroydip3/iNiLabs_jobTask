

const Navbar = () => {
      return (
            <div>
                  <div className="flex items-center justify-between py-4 border-b px-10">
                        <h1 className="font-semibold text-4xl">miro</h1>
                        <ul className="flex items-center gap-5 text-lg">
                              <li>Product</li>
                              <li>Solutions</li>
                              <li>Resources</li>
                              <li>Enterprise</li>
                              <li>Pricing</li>
                        </ul>
                        <div className="flex gap-5">
                              <ul className="flex gap-5 items-center text-lg">
                                    <li>EN</li>
                                    <li>Contact</li>
                                    <li>Sales</li>
                              </ul>
                              <button className="bg-blue-600 text-white px-4 py-2 rounded-full">Sign up free</button>
                        </div>
                  </div>
            </div>
      );
};

export default Navbar;