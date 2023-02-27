import React, { useState } from 'react';
import Toolbar from './Toolbar';

function LandingPage() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const onCLickLogin = () => {
    setLoggedIn(true);
  };

  const onClickLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      <Toolbar
        isLoggedIn={isLoggedIn}
        onClickLogin={onCLickLogin}
        onClickLogout={onClickLogout}
      />
      <div style={{ padding: 16 }}> 영환이와 함께하는 섹스</div>
    </div>
  );
}

export default LandingPage;
