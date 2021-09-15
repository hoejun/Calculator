import React from "react";
import PropTypes from "prop-types";

//라이브러리, api와 구분 할 수 있게 한줄 띄움.
import "./Display.css";

export const Display = ({value})=> {
  return (
    <div className="component-display">
      <div>{value}</div>
    </div>
  );
}

// 타입확인
Display.propTypes = {
  value: PropTypes.string,
};

export default Display;

// export default class Display extends React.Component {
//   // 타입확인
//   static propTypes = {
//     value: PropTypes.string,
//   };

//   render() {
//     return (
//       <div className="component-display">
//         {this.props.value}
//         <div>{this.props.value}</div>
//       </div>
//     );
//   }
// }
