import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions";

const Counter = (props) => {
  console.log(props);

  return (
    <div>
      <button onClick={props.increment} className="increment">
        Increment
      </button>
      <button onClick={props.decrement} className="decrement">
        Decrement
      </button>
      {/* count is the value of state.count*/}
      {/*its value is initialized in the reducer function*/}
      Current Count: <span>{props.count}</span>
    </div>
  );
};

//to make (some of) the data in the redux store
//to be passed as props to our component
//the mapStateToProps name is only a convention
const mapStateToProps = (state) => {
  return { count: state.count };
};

//we use connect in order to get state from provider
//AND the action creator functions
export default connect(mapStateToProps, {
  //my action creators
  increment,
  decrement,
})(Counter);
