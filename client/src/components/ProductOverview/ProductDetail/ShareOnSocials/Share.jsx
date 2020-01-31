import React from 'react';

import './shareOnSocials.scss';

function Share(props) {
  return (
    <div className="icon" role="button" tabIndex={0}>
      <a href="https://www.facebook.com/">
        <span className="fa fa-facebook-f" aria-hidden="true" />
      </a>
      <br />
      <a href="https://twitter.com/home">
        <span className="fa fa-twitter" aria-hidden="true" />
      </a>
      <br />
      <a href="https://www.pinterest.com/">
        <span className="fa fa-pinterest" aria-hidden="true" />
      </a>
    </div>
  );
}

export default Share;
