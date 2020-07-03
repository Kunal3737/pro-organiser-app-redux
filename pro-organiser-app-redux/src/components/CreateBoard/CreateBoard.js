import React, { Component } from "react";
import "../CreateBoard/CreateBoard.css";
import { connect } from "react-redux";
import createBoardAction from "../../redux/actions/createBoardAction";

class CreateBoard extends Component {
  createButtonHandler = (e) => {
    e.preventDefault();
    let boardName = document.getElementById("name").value;
    let boardTeam = document.getElementById("team").value;
    // let teamMembersName = boardTeam.split(",");
    let boardType = document.getElementById("type").value;

    const boardData = {
      boardName: boardName,
      boardTeam: boardTeam,
      boardType: boardType,
    };

    this.props.createBoardAction(boardData);
    this.props.history.push("/", boardName);
  };

  render() {
    return (
      <div className="wrapperDivBoard">
        <h2 className="boardHeading">Create a Board</h2>
        <form onSubmit={(e) => this.createButtonHandler(e)}>
          <label htmlFor="name">Enter a name for your board</label>
          <br />
          <input
            required
            className="inputFieldsForCAB"
            type="text"
            placeholder="e.g. Agile Sprint Board"
            id="name"
          />
          <br />
          <br />
          <label htmlFor="team">Add your team members</label>
          <br />
          <input
            required
            className="inputFieldsForCAB"
            id="team"
            type="text"
            placeholder="Member names should be separated by commas"
          />
          <br />
          <br />
          <label htmlFor="type">Enter the type of your board</label>
          <br />
          <input
            required
            className="inputFieldsForCAB"
            id="type"
            type="text"
            placeholder="e.g. Design board, Testing board, etc."
          />
          <br />
          <br />
          <button type="submit" id="CreateBoard">
            Create
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createBoardAction: (dataReceived) =>
      dispatch(createBoardAction(dataReceived)),
  };
};

export default connect(null, mapDispatchToProps)(CreateBoard);
