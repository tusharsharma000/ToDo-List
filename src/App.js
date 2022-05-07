import { useState } from "react";
import "./styles.css";

export default function App() {
  const handlechange = (e) => {
    setTask(e.target.value);
  };

  const handleclick = (e) => {
    e.preventDefault();
    const newdata = task;
    setData([...data, newdata]);
    setTask("");
  };
  const handledelete = (ind) => {
    const newarr = data.filter((value, index) => {
      return index !== ind;
    });
    setData(newarr);
  };

  const [task, setTask] = useState("");
  const [data, setData] = useState([]);
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Add Items"
        value={task}
        onChange={handlechange}
      />
      <button type="submit" onClick={handleclick}>
        Add
      </button>
      <br></br>
      <br></br>
      {data.map((items, index) => {
        return (
          <li>
            {items} <button onClick={() => handledelete(index)}>X</button>
          </li>
        );
      })}
    </div>
  );
}
