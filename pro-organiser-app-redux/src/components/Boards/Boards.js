import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "../Boards/Boards.module.css";
import "../Boards/Boards.css";
import Modal from "react-modal";
import { connect } from "react-redux";
import boardsAction from "../../redux/actions/boardsAction";
import columnAction from "../../redux/actions/columnAction";
import addCardAction from "../../redux/actions/addCardAction";
import teamMembersAction from "../../redux/actions/teamMembersAction";
import Cards from "../Cards/Cards";

Modal.setAppElement("#root");
class Boards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModal: false,
      CardModal: false,
      teamMembers: "",
      teamMembersArray: [],
      Team: "",
      currentColumnId: "",
    };
  }

  componentDidMount() {
    this.props.columnAction(this.props.match.params.id);
    this.props.teamMembersAction(this.props.match.params.id);
  }

  addColumnHandler = (e) => {
    e.preventDefault();
    const column_name = document.getElementById("column_name").value;
    console.log(column_name);
    console.log(this.props.match.params.id);

    if (column_name !== "") {
      this.props.boardsAction(column_name, this.props.match.params.id);
      this.setState({
        isModal: false,
      });
    }
  };

  addCardHandler = async (e) => {
    e.preventDefault();
    var title = document.getElementById("title").value;
    console.log("Title :", title);
    console.log(this.state.Team);
    var description = document.getElementById("description").value;
    console.log(description);
    var due_date = document.getElementById("due_date").value;
    console.log(due_date);
    console.log(this.state.currentColumnId);

    if (
      title !== "" &&
      this.state.Team !== "" &&
      description !== "" &&
      due_date !== ""
    ) {
      this.props.addCardAction(
        title,
        this.state.Team,
        description,
        due_date,
        this.state.currentColumnId,
        this.props.match.params.id
      );
      //   await axios
      //     .post(
      //       `https://pro-organizer-app-659cb.firebaseio.com/boards/${paramsId}/column/${Id}/cards.json`,
      //       {
      //         title: document.getElementById("title").value,
      //         Members: Team,
      //         Description: document.getElementById("description").value,
      //         Due_Date: document.getElementById("due_date").value,
      //       }
      //     )
      //     .then((response) => {
      //       console.log(response.data);
      //       setName(response.data);
      //     });
      //   setCardModal(false);
      //   setForCard(true);
    }
    this.setState({
      CardModal: false,
    });
  };

  addACardHandler = async (e, currentColumnId) => {
    e.preventDefault();
    console.log(currentColumnId);
    await this.setState({
      CardModal: true,
      teamMembers: this.props.teamMembers,
      currentColumnId: currentColumnId,
    });
    console.log(this.state.teamMembers);
    const teamMembers = this.state.teamMembers.split(",");
    console.log(teamMembers);
    await this.setState({
      teamMembersArray: teamMembers,
    });
  };

  render() {
    console.log(this.props.match.params.id);
    return (
      <div className={styles.outerBoards}>
        <p className={styles.headerBoard}>
          <span className={styles.boardName}>
            {this.props.match.params.boardName}
          </span>
          <button className={styles.deleteBoard}>
            {/* onClick={deleteBoardHandler} */}
            Delete Board
          </button>
        </p>

        <div className={styles.combiningArrayAndAddColumnButton}>
          <div className={styles.mappingColumns}>
            {this.props.columnData &&
              Object.entries(this.props.columnData).map((items) => (
                // console.log(items[1].cards),
                <div key={items[0]} className="outerColumnDiv">
                  <div className={styles.myColumn}>
                    <div className={styles.forDustbin}>
                      {items[1].column_name}
                      <FontAwesomeIcon
                        icon={faTrashAlt}
                        // onClick={(id) => {
                        //   deleteColumnHandler(items.id);
                        // }}
                      />
                    </div>
                    <div
                    // className="holdingCards"
                    // onDragOver={(e) => {
                    //   e.preventDefault();
                    //   console.log(e.target);
                    // }}
                    // onDrop={(e, id) => {
                    //   cardDropped(e, items.id);
                    // }}
                    >
                      {/* {items.cards && ()} */}
                      {/* {items[1].cards &&  */}
                      <Cards
                        boardId={this.props.match.params.id}
                        columnId={this.state.currentColumnId}

                        // members={forInitials}
                        // data={items}
                        // cardDragged={isCardMoved}
                        // allMembers={Members}
                        // title={Title}
                        // paramsId={paramsId}
                        // id={items.id}
                        // description={Description}
                        // dueDate={DueDate}
                        // cardModal={CardModal}
                        // forCard={ForCard}
                        // name={Name}
                      />
                    </div>
                    <button
                      className={styles.addCard}
                      onClick={(e, currentColumnId) => {
                        this.addACardHandler(e, items[0]);
                      }}
                    >
                      Add a card
                    </button>
                  </div>
                </div>
              ))}
          </div>

          <div
            className={styles.addColumn}
            onClick={() => {
              this.setState({
                isModal: true,
              });
            }}
          >
            <p className="columnbutton">Add a column</p>
          </div>
        </div>

        {/* Modal for Adding Column */}
        <Modal isOpen={this.state.isModal}>
          <p className={styles.boardName}>Add Column</p>
          <form>
            <label>Name of the Column </label>
            <input id="column_name" type="text" required />
            <br />
            <br />
            <button
              id="CreateColumn"
              type="button"
              onClick={(e) => {
                this.addColumnHandler(e);
              }}
            >
              Add Column
            </button>
            <button
              id="closeModal"
              onClick={() => {
                this.setState({
                  isModal: false,
                });
              }}
            >
              Close
            </button>
          </form>
        </Modal>

        {/*
             Modal for Adding Card */}
        <Modal isOpen={this.state.CardModal}>
          <p className={styles.boardName}>Add Card</p>
          <form>
            <label htmlFor="title">Title of the card</label>
            <br />
            <input
              type="text"
              required
              id="title"
              placeholder="e.g. Add a new icon"
            />
            <br />
            <br />

            <label htmlFor="membersName">
              Members that should be a part of this card
            </label>
            <br />
            <select
              id="membersName"
              multiple
              onChange={(e) => {
                const values = [...e.target.selectedOptions].map(
                  (opt) => opt.value
                );
                // setTeam(values);
                this.setState({
                  Team: values,
                });
              }}
            >
              <option>Please select atleast one team member</option>
              {this.state.teamMembersArray.map((member) => (
                <option value={member} key={member}>
                  {member}
                </option>
              ))}
            </select>
            <br />
            <br />

            <label htmlFor="description">Description</label>
            <br />
            <input
              required
              type="text"
              id="description"
              placeholder="Add your description here"
            />
            <br />
            <br />

            <label htmlFor="due_date">Due Date</label>
            <br />
            <input required type="date" id="due_date" />
            <br />
            <br />
            <button id="CreateCard" onClick={(e) => this.addCardHandler(e)}>
              Add Card
            </button>
            <button
              onClick={() => {
                this.setState({
                  CardModal: false,
                });
              }}
            >
              Cancel
            </button>
          </form>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  columnData: state.columnBoardReducer.columnData,
  teamMembers: state.teamMembersReducer.teamMembers,
});

const mapDispatchToProps = (dispatch) => {
  return {
    boardsAction: (column_name, boardId) =>
      dispatch(boardsAction(column_name, boardId)),
    columnAction: (boardId) => dispatch(columnAction(boardId)),
    teamMembersAction: (boardId) => dispatch(teamMembersAction(boardId)),
    addCardAction: (
      title,
      Team,
      description,
      due_date,
      currentColumnId,
      currentboardId
    ) =>
      dispatch(
        addCardAction(
          title,
          Team,
          description,
          due_date,
          currentColumnId,
          currentboardId
        )
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Boards);
