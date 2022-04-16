import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Logo1 from "../../assets/images/Logo1.svg";
import { getUser } from "../../reducks/users/selectors";
import ProfileHeader from "./ProfileHeader";

const Header = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const user = getUser(selector);
  const token = user ? user.token : null;
  const [openModalMenu, setOpenModalMenu] = useState(false);

  return (
    <header className="header">
      <Link to="/">
        <img src={Logo1} alt="Logo" height="40" width="96" />
      </Link>

      <div>
        {token ? (
          <button
            onClick={() => setOpenModalMenu(true)}
            className="sign-out-btn"
          >
            {user.name}
            <span className="pic arrow-down"></span>
          </button>
        ) : (
          <Link to="/sign-up">Sign Up</Link>
        )}
        <ProfileHeader
          user={user}
          openModalMenu={openModalMenu}
          setOpenModalMenu={setOpenModalMenu}
        />
      </div>
    </header>
  );
};

export default Header;
