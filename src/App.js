import { Incomp } from "./components/Incomp";
import { Comp } from "./components/Comp";
import { All } from "./components/All";
import { useState } from "react";

function App() {
  const [tab, setTab] = useState("all");
  const [inputTodo, setInputTodo] = useState("");
  const [tasks, setTasks] = useState(["task1", "task2"]);

  // テキスト
  const onChangeInputTodo = (e) => {
    setInputTodo(e.target.value);
  };

  // 追加
  const onClickAdd = (event) => {
    if (inputTodo === "") return;
    const newTodos = [...tasks, inputTodo];
    setTasks(newTodos);
    setInputTodo("");
    event.preventDefault();
  };

  // 削除
  const onClickDelete = (index) => {
    const newTodos = [...tasks];
    newTodos.splice(index, 1);
    setTasks(newTodos);
  };

  // ラジオボタン実装
  const [val, setVal] = useState("all");
  const handleChange = (e) => setVal(e.target.value);

  return (
    <div>
      <h1>ToDoリスト</h1>
      <header>
        <table>
          <tr>
            <td>
              <input
                type="radio"
                value="all"
                onChange={handleChange}
                checked={val === "all"}
                onClick={() => {
                  setTab("all");
                }}
              />
              すべて
            </td>
            <td>
              <input
                type="radio"
                value="incomp"
                onChange={handleChange}
                checked={val === "incomp"}
                onClick={() => {
                  setTab("todo");
                }}
              />
              作業中
            </td>
            <td>
              <input
                type="radio"
                value="comp"
                onChange={handleChange}
                checked={val === "comp"}
                onClick={() => {
                  setTab("end");
                }}
              />
              完了
            </td>
          </tr>
        </table>
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
                  <button onClick={() => onClickDelete(index)}>削除</button>
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
