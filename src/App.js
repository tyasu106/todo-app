import { Incomp } from "./components/Incomp";
import { Comp } from "./components/Comp";
import { All } from "./components/All";
import { useState } from "react";

function App() {
  const [tab, setTab] = useState("all");
  const [inputTodo, setInputTodo] = useState("");
  const [tasks, setTasks] = useState(["task1", "task2"]);

  const onChangeInputTodo = (e) => {
    setInputTodo(e.target.value);
  };

  const onClickAdd = (event) => {
    if (inputTodo === "") return;
    const newTodos = [...tasks, inputTodo];
    setTasks(newTodos);
    setInputTodo("");
    event.preventDefault();
  };
  return (
    <div>
      <h1>ToDoリスト</h1>
      <header>
        <ul>
          <li
            onClick={() => {
              setTab("all");
            }}
          >
            すべて
          </li>
          <li
            onClick={() => {
              setTab("todo");
            }}
          >
            作業中
          </li>
          <li
            onClick={() => {
              setTab("end");
            }}
          >
            完了
          </li>
        </ul>
      </header>
      <hr />
      {(() => {
        if (tab === "all") {
          return <All />;
        }
        if (tab === "todo") {
          return <Incomp />;
        } else {
          return <Comp />;
        }
      })()}
      <div>
        <table>
          <tr>
            <th>ID</th>
            <th>コメント</th>
            <th>状態</th>
          </tr>
          {tasks.map((task, index) => {
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{task}</td>
                <td>
                  <button>作業中</button>
                  <button>削除</button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      <h2>新規タスクの追加</h2>
      <form onClick={onClickAdd}>
        <input value={inputTodo} onChange={onChangeInputTodo} />
        <button>追加</button>
      </form>
    </div>
  );
}

export default App;
