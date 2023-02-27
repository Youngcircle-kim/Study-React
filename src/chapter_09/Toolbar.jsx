import React from 'react';

const styles = {
  wrapper: {
    padding: 16,
    display: 'flex',
    flexDirection: 'row',
    borderBottom: '1px solid grey',
  },
  greeting: {
    marginRight: 8,
  },
};

function Toolbar(props) {
  // eslint-disable-next-line react/prop-types
  const { isLoggedIn, onClickLogin, onClickLogout } = props;
  return (
    <div style={styles.wrapper}>
      {isLoggedIn && <span style={styles.greeting}>환영합니다!</span>}

      {isLoggedIn ? (
        // eslint-disable-next-line react/button-has-type
        <button onClick={onClickLogout}>로그아웃</button>
      ) : (
        // eslint-disable-next-line react/button-has-type
        <button onClick={onClickLogin}>로그인 </button>
      )}
    </div>
  );
}
export default Toolbar;
