import profile from "./../../assets/images/profile.png"
const Header = () => {
  return (
    <div className="border-b-2 mt-10">
      <div className="navbar">
        <div className="flex-1">
          <a className="text-4xl font-bold">Knowledge Cafe</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={profile} />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
