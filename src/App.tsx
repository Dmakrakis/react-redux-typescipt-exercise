import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import "./App.css";
import { actionCreators, State } from "./state";

function App() {
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const amount = useSelector((state: State) => state.bank);

  return (
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={() => depositMoney(1000)}>DEPOSIT</button>
      <button onClick={() => withdrawMoney(500)}>WITHDRAW</button>
      <button onClick={() => bankrupt()}>BANKRUPT</button>
    </div>
  );
}

export default App;
