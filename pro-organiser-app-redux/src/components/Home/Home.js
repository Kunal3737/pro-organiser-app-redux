import React, { Component } from "react";
import styles from "../Home/Home.module.css";
import { connect } from "react-redux";
import homeBoardsAction from "../../redux/actions/homeBoardsAction";

class Home extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidMount = () => {
    this.props.homeBoardsAction();
  };

  render() {
    console.log(this.props);
    console.log(this.props.createBoardData);
    console.log(this.props.createBoardData);
    const prop = this.props.createBoardData;
    console.log(prop);
    if (!prop) {
      return (
        <p className={styles.noBoard}>
          <strong>
            You haven't created any boards. Kindly click on the 'Create Board'
            button in the navigation bar to create a board.
          </strong>
        </p>
      );
    }

    if (prop) {
      console.log("hi");
      console.log(this.props);
      return (
        <div>
          {Object.entries(prop).map((item) => (
            <div
              className={styles.displayedBoards}
              key={item[0]}
              onClick={() => {
                this.props.history.push(`/${item[0]}/${item[1].boardName}`);
              }}
            >
              {item[1].boardName}
            </div>
          ))}
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  createBoardData: state.homeBoardReducer.createBoardData,
});

const mapDispatchToProps = (dispatch) => {
  return {
    homeBoardsAction: () => dispatch(homeBoardsAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
