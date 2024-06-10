import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useState } from "react";

// TODO: 계산결과를 redux를 이용한 전역상태로 관리해 보세요.
function App() {
  const calculator = useSelector((state) => state.calculator);
  const dispatch = useDispatch();

  const [temp, setTemp] = useState(0);

  const addBtn = () => {
    dispatch(add(temp));
    setTemp(0);
  };

  const removeBtn = () => {
    dispatch(remove(temp));
    setTemp(0);
  };

  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input value={temp} onChange={(e) => setTemp(e.target.value)} /> 만큼을{" "}
        <button onClick={addBtn}>더할게요</button>{" "}
        <button onClick={removeBtn}>뺄게요</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{calculator}</p>
      </div>
    </div>
  );
}

export default App;
