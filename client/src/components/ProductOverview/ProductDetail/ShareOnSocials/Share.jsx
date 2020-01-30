import React from 'react';

import './shareOnSocials.scss';

function Share(props) {
  return (
    <div className="icon" role="button" tabIndex={0}>
      <span className="fa fa-facebook-f" aria-hidden="true" />
      <br />
      <span className="fa fa-twitter" aria-hidden="true" />
      <br />
      <span className="fa fa-pinterest" aria-hidden="true" />
    </div>
  );
}

export default Share;
