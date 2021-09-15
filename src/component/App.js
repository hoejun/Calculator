import React, {useState} from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";

//파일 구조 단일 프로젝트 내에서는 3~4번을 최대한으로 풀더를 중첩시키지마라.
//파일의 기능 or 라우트에 의한 분류, 파일 유형에 의한 분류

// const App = () => {
//   // const [total, setTotal] = useState(null);
//   // const [next, setNext] = useState(null);
//   // const [operation, setOperation] = useState(null);
//   const [calculator, setCalculator] = useState({
//     total:null,
//     next:null,
//     operation:null
//   })

//   const handleClick = buttonName => {
//     console.log(calculator)
//     setCalculator(calculate(calculator, buttonName));
//   };

//   return (
//     // 컴포넌트화
//     <div className="component-app">
//     <Display value={calculator.next || calculator.total || "0"} />{/*결과 컴포넌트 */}
//     <ButtonPanel clickHandler={handleClick} />{/**버튼 컴포넌트 */}
//   </div>
//   );
// };

// export default App;

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = buttonName => {
    console.log('3')
    console.log(this.state)
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      // 컴포넌트
      // App->Display
      // App->ButtonPanel->Button
      <div className="component-app">
        <Display value={this.state.next || this.state.total || "0"} />{/*결과 컴포넌트 */}
        <ButtonPanel clickHandler={this.handleClick} />{/**버튼 컴포넌트 */}
      </div>
    );
  }
}


