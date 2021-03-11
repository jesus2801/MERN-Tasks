import React, {useContext} from 'react';
import authContext from '../../context/auth/authContext';

function Header() {
  const {user, signOff} = useContext(authContext);
  return (
    <header>
      {user ? (
        <p>
          Hello, <span>{user.name}</span>!
        </p>
      ) : null}
      <a href="#!" onClick={() => signOff()}>
        Sign off
      </a>
    </header>
  );
}

export default Header;
