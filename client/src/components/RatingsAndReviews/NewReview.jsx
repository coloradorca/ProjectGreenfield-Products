/* eslint-disable no-unused-vars */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
// this is the input for new review, utlizies a forms
// button under the list
// opens up modal window named wite your review about product name

import React from 'react';
import ReactModal from 'react-modal';
import ReviewChar from './ReviewChar.jsx';
import NewReviewStars from './Stars/NewReviewStars.jsx';

class NewReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charCountDown: 50,
      modalIsOpen: false,
    };
    // const modalState = this.props.showNewReview
    //   ? 'modal display-on'
    //   : 'modal display-off';
    this.handleChange = this.handleChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      modalIsOpen: true,
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false,
    });
  }

  handleChange(e) {
    let countdown = this.state.charCountDown - 1;
    // eventTarget.addEventListener('keydown', (event) => {
    //   if (event.isComposing || event.keyCode === 8) {
    //     let countdown = this.state.charCountDown + 1;
    //   }
    //   return countdown;
    // });
    if (countdown <= 0) {
      countdown = 'Minimum reached';
    }
    this.setState({
      charCountDown: countdown,
    });
    this.fileAlert = this.fileAlert.bind(this);
  }

  fileAlert(e) {
    if (e.files.length > 5) {
      alert('Only 5 Files Accepted');
      e.preventDefault();
    }
  }

  render() {
    const { newReview } = this.props;
    const { modalIsOpen, value } = this.state;
    return (
      // these go in the form brackert action = '/thewebsitehere' (similar to fetching) method = 'post'
      <span>
        <button
          type="button"
          className="addReview"
          onClick={() => this.openModal()}
        >
          New Review +
        </button>
        <div>
          <ReactModal
            isOpen={modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            className="newReviewModal"
            overlayClassName="OverlayModal"
            contentLabel="Add Review Modal"
          >
            <div>
              <button
                type="button"
                className="closeReview"
                onClick={() => this.closeModal()}
              >
                X
              </button>
            </div>
            <form className="newReview">
              What would you rate this item?* mandatory
              <NewReviewStars />
              Do you recommend this product?* mandatory
              <div name="newRecommend" required>
                <input type="radio" name="yesRecommend" /> Yes
                <input type="radio" name="noRecommend" /> No
                <br />
              </div>
              <ReviewChar />
              Review Summary
              <br />
              <input type="text" name="newSummary" maxLength="60" />
              <br />
              Your Review* - mandatory
              <br />
              <textArea
                name="newBody"
                rows="10"
                cols="40"
                placeholder="Why did you like the product or not?"
                minLength="50"
                maxLength="1000"
                onChange={(e) => this.handleChange(e)}
                required
              />
              <div>{this.state.charCountDown}</div>
              <br />
              Submit your photos here
              <br />
              <input type="file" name="newPhotos" accept="image/*" multiple />
              <br />
              Your Name * mandatory & will be shared
              <br />
              <input type="text" name="newName" maxLength="60" required />
              <br />
              Your email * mandatory will not be shared
              <br />
              <input type="email" name="newEmail" maxLength="60" required />
              <br />
              <input
                type="submit"
                onClick={(e) => {
                  this.fileAlert();
                  this.props.newReview();
                }}
              />
            </form>
          </ReactModal>
        </div>
      </span>
    );
  }
}

export default NewReview;

// overall rating (mandatory)- empty stars appear click to fill on them (fractions allowed)

// recomned (mandatory)- radio button y/n

// Characteristics (mandatory)- 5 radio buttons look on sheet

// Review summary - A text input allowing up to 60 characters.

// Review body (mandatory)- A text input allowing up to 1000 characters.
// Placeholder text should read: “Why did you like the product or not?”.
// The review must be over 50 characters long in order to be submitted.   If the user tries to submit a review shorter that 50 characters, then the submission should fail in the same manner as it would for a blank mandatory field. reuires counter thats dolled out on list page (get that)

//  Upload your photos-  A button will appear allowing users to upload their photos to the form.
// Clicking the button should open a separate window where the photo to be can be selected.
// After the first image is uploaded, a thumbnail showing the image should appear.  A user should be able to add up to five images before the button to add disappears, preventing further additions.

// What is your nickname (mandatory)- A text input allowing up to 60 characters for the user’s display name.Placeholder text should read: “Example: jackson11!”. Below this field, the text “For privacy reasons, do not use your full name or email address” will appear.

// Your email (mandatory)- A text input allowing up to 60 characters.  Placeholder text should read: “Example: jackson11@email.com”. Below this field, the text “For authentication reasons, you will not be emailed” will appear.

// Submit review (button) - A button by which the review can be submitted.Upon selecting this button the form’s inputs should be validated.   If there are any invalid entries, the submission should be prevented, and a warning message will appear.   This message should be titled “You must enter the following:”
// This error will occur if:
// Any mandatory fields are blank
// The review body is less than 50 characters
// The email address provided is not in correct email format
// The images selected are invalid or unable to be uploaded.
