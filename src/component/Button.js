import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

export const Button = ({name, clickHandler, wide, orange}) => {
  const className = [
    "component-button",
    orange ? "orange" : "",
    wide ? "wide" : "",
  ];

  const handleClick = () => {
    console.log('1')
    clickHandler(name);
  };

  return (
    // .join(" ") 문자열 합치기, trim() 양 끝의 공백 제거
    <div className={className.join(" ").trim()}>
      <button onClick={handleClick}>{name}</button>
    </div>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  orange: PropTypes.bool,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func,
};

export default Button;

// export default class Button extends React.Component {
//   static propTypes = {
//     name: PropTypes.string,
//     orange: PropTypes.bool,
//     wide: PropTypes.bool,
//     clickHandler: PropTypes.func,
//   };

//   handleClick = () => {
//     this.props.clickHandler(this.props.name);
//   };

//   render() {
//     //변수안에 삼항 연산자
//     const className = [
//       "component-button",
//       this.props.orange ? "orange" : "",
//       this.props.wide ? "wide" : "",
//     ];

//     return (
//       <div className={className.join(" ").trim()}>
//         <button onClick={this.handleClick}>{this.props.name}</button>
//       </div>
//     );
//   }
// }
