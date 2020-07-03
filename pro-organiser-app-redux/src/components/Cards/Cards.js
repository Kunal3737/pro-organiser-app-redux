import React, { Component } from "react";
import styles from '../Cards/Cards.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
// import Modal from "react-modal";
import { connect } from "react-redux";
import cardsAction from "../../redux/actions/cardsAction";

class Cards extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       columnId: this.props.columnId
    }
  }
  
  componentDidMount() {
    this.props.cardsAction(this.props.boardId, this.props.columnId);
  }

  render() {
    console.log(this.props);
    console.log(this.props.cardsData);
    console.log(this.props.boardId);
    console.log(this.props.columnId);
    return (
          <div className="holdingCards">
            {this.props.cardsData &&
              Object.entries(this.props.cardsData).map((item) => (
                // console.log(item),
                <div
                  key={item[0]}
                  id={item[0]}
                  className={styles.cardsInternal}
                  // draggable="true"
                  // onDragStart={(e) => {
                  //   dragStart(e, item, props.data);
                  // }}
                  // onClick={(cardId) => {
                  //   cardClickHandler(item[0]);
                  // }}
                >
                  <div>{item[1].Title}</div>
                  <FontAwesomeIcon icon={faList} />
                  <span className={styles.initialsWrapper}>
                    {this.props.cardsData &&
                      item[1].Members.map((items) => (
                        <span key={items} className={styles.initials}>
                          {this.props.cardsData &&
                            items
                              .split(" ")
                              .map((word) => word[0])
                              .join("")}
                        </span>
                      ))}
                  </span>
                </div>
              ))}

            {/* {Object.entries(myCards).map((item) =>
              item[0] === cardIdForCardDetail ? (
                <Modal isOpen={cardDetailModal} key={item[0]}>
                  <div className={styles.headerContainer}>
                    <span>
                      <h3>{item[1].title}</h3>
                      <h4>in {match.params.name}</h4>
                    </span>
                    <span>
                      <button
                        className={styles.editCardDetail}
                        onClick={(e, cardTitle, cardDescription, cardDueDate) => {
                          editHandler(
                            e,
                            item[1].title,
                            item[1].Description,
                            item[1].Due_Date
                          );
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className={styles.archiveCardDetail}
                        onClick={(e, cardArchieveId) => {
                          archieveHandler(e, item[0]);
                        }}
                      >
                        Archive
                      </button>
                    </span>
                  </div>
                  <hr />
                  <h3>Description</h3>
                  <div>{item[1].Description}</div>
                  <h3>Members</h3>
                  <div>
                    {item[1].Members.map((items) => (
                      <span key={items} className={styles.initials}>
                        {items
                          .split(" ")
                          .map((word) => word[0])
                          .join("")}
                      </span>
                    ))}
                  </div>
                  <h3>Due Date</h3>
                  <div> {item[1].Due_Date} </div>
                  <br />
                  <button
                    className={styles.closeCardDetailModal}
                    onClick={() => {
                      setCardDetailModal(false);
                    }}
                  >
                    Close
                  </button>
                </Modal>
              ) : (
                <React.Fragment key={item[0]}></React.Fragment>
              )
            )} */}

            {/* Modal for Editing Card Details */}
            {/* {Object.entries(myCards).map((item) =>
              // console.log(item)
              item[0] === cardIdForCardDetail ? (
                <Modal isOpen={editModal} key={item[0]}>
                  <p className="boardName">Edit {item[1].title} Card</p>
                  <form>
                    <label htmlFor="title">Edit the title of your card</label>
                    <br />
                    <input
                      type="text"
                      id="title"
                      value={editCardTitle}
                      onChange={(e) => {
                        setEditCardTitle(e.target.value);
                        console.log(editCardTitle);
                      }}
                    />
                    <br />
                    <br />

                    <label htmlFor="membersName">
                      Choose members for this task (select multiple, if needed)
                    </label>
                    <br />
                    <select
                      id="membersName"
                      multiple
                      onChange={(e) => {
                        const values = [...e.target.selectedOptions].map(
                          (opt) => opt.value
                        );
                        setEditedTeamMembers(values);
                        console.log(editedTeamMembers);
                      }}
                    >
                      <option>Please select atleast one team member</option>
                      {props.allMembers.map((member) => (
                        <option value={member} key={member}>
                          {member}
                        </option>
                      ))}
                    </select>
                    <br />
                    <br />

                    <label htmlFor="description">
                      Edit the description of your task
                    </label>
                    <br />
                    <input
                      type="text"
                      id="description"
                      placeholder="Add your description here"
                      value={editedDescription}
                      onChange={(e) => {
                        setEditedDescription(e.target.value);
                      }}
                    />
                    <br />
                    <br />

                    <label htmlFor="due_date">Edit the due date for this task</label>
                    <br />
                    <input
                      type="date"
                      value={editedDueDate}
                      onChange={(e) => {
                        setEditedDueDate(e.target.value);
                      }}
                      id="due_date"
                    />
                    <br />
                    <br />

                    <button
                      id="CreateCard"
                      onClick={(e, id) => {
                        saveEditedChanges(e, item[0]);
                      }}
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={() => {
                        setEditModal(false);
                      }}
                    >
                      Cancel
                    </button>
                  </form>
                </Modal>
              ) : (
                <React.Fragment key={item[0]}></React.Fragment>
              )
            )} */}
          </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cardsData: state.cardsReducer.cardsData,
});

const mapDispatchToProps = (dispatch) => {
  return {
    cardsAction: (boardId, columnId) =>
      dispatch(cardsAction(boardId, columnId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
