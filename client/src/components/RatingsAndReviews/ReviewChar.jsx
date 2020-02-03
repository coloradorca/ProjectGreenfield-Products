/* eslint-disable */
import React from 'react';

class ReviewChar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // star rating
      <div>
        Size * mandatory
        <div newClass="reviewSize" required>
          <input type="radio" name="sizeSmall" /> A size too small
          <input type="radio" name="halfSizeSmall" /> ½ a size too small
          <input type="radio" name="perfectSize" /> Perfect
          <input type="radio" name="halfSizeBig" /> ½ a size too big
          <input type="radio" name="sizeBig" /> A size too big
        </div>
        Width * mandatory
        <div newClass="reviewWidth" required>
          <input type="radio" name="narrowWidth" /> Too narrow
          <input type="radio" name="slightNarrowWidth" /> Slightly narrow
          <input type="radio" name="perfectWidth" /> Perfect
          <input type="radio" name="slightWideWidth" /> Slightly wide
          <input type="radio" name="wideWidth" /> Too wide
        </div>
        Comfort * mandatory
        <div newClass="reviewComfort" required>
          <input type="radio" name="uncomfortable" /> Uncomfortable
          <input type="radio" name="slightUncomfortable" /> Slightly
          uncomfortable
          <input type="radio" name="okComfort" /> Ok
          <input type="radio" name="comfortable" /> Comfortable
          <input type="radio" name="perfectComfort" /> Perfect
        </div>
        Quality * mandatory
        <div newClass="reviewQuality" required>
          <input type="radio" name="poorQuality" /> Poor
          <input type="radio" name="belowAvgQuality" /> Below average
          <input type="radio" name="expectedQuality" /> What I expected
          <input type="radio" name="greatQuality" /> Pretty great
          <input type="radio" name="perfectQuality" /> Perfect
        </div>
        Length * mandatory
        <div newClass="reviewLength" required>
          <input type="radio" name="shortLength" /> Runs Short
          <input type="radio" name="slightSortLength" /> Runs slightly short
          <input type="radio" name="perfectLength" /> Perfect
          <input type="radio" name="slightLongLenth" /> Runs slightly long
          <input type="radio" name="longLength" /> Runs long
        </div>
        Fit * mandatory
        <div newClass="reviewFit" required>
          <input type="radio" name="tightFit" /> Runs tight
          <input type="radio" name="slightTightFit" /> Runs slightly tight
          <input type="radio" name="perfectFit" /> Perfect
          <input type="radio" name="slightLooseFit" /> Runs slightly loose
          <input type="radio" name="LooseFit" /> Runs loose
        </div>
      </div>
    );
  }
}

export default ReviewChar;
