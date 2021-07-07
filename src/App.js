import { useState } from "react";

function App() {
  const initialState = [
    { 
      id: 0,
      task: "task1",
      state: false,
    },
    {
      id: 1,
      task: "task2",
      state: false,
    },
    {
      id: 2,
      task: "task3",
      state: false,
    },
  ];
  const [todos, setTodo] = useState(initialState);
  const [task, setTask] = useState("");

  // テキスト
  const onChangeInputTodo = (e) => {
    setTask(e.target.value);
  };

  // 追加
  const onClickAdd = (event) => {
    event.preventDefault();
    if (task === "") return;
    const id = todos.length
    setTodo((todos) => [...todos, { id, task, state: false }]);
    setTask("");
  };

  // 削除
  const onClickDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodo(newTodos);
  };

  // 状態変更
  const onChangeState = (index) => {
    const newTodos = [...todos];
    if (todos[index].state === false) {
      todos[index].state = true;
    } else {
      todos[index].state = false;
    }
    setTodo(newTodos);
  };

  // ラジオボタン実装
  const [val, setVal] = useState("all");
  const inCompTodos = todos.filter((todo) => todo.state === false);
  const compTodos = todos.filter((todo) => todo.state === true);

  const handleChange = (e) => {
    if (e.target.value === "all") {
      setVal(e.target.value);
    }
    if (e.target.value === "incomp") {
      setVal(e.target.value);
    }
    if (e.target.value === "comp") {
      setVal(e.target.value);
    }
  };

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
              />
              すべて
            </td>
            <td>
              <input
                type="radio"
                value="incomp"
                onChange={handleChange}
                checked={val === "incomp"}
              />
              作業中
            </td>
            <td>
              <input
                type="radio"
                value="comp"
                onChange={handleChange}
                checked={val === "comp"}
              />
              完了
            </td>
          </tr>
        </table>
      </header>
      <hr />
      <div>
        <table>
          <tr>
            <th>ID</th>
            <th>コメント</th>
            <th>状態</th>
          </tr>
          {(() => {
            if (val === "all") {
              return todos.map((todo) => {
                return (
                  <tr key={todo.id}>
                    <td>{todo.id}</td>
                    <td>{todo.task}</td>
                    <td>
                      <button onClick={() => onChangeState(todo.id)}>
                        {todo.state ? "完了" : "作業中"}
                      </button>
                      <button onClick={() => onClickDelete(todo.id)}>削除</button>
                    </td>
                  </tr>
                );
              });
            }
            if (val === "incomp") {
              return inCompTodos.map((todo) => {
                return (
                  <tr key={todo.id}>
                    <td>{todo.id}</td>
                    <td>{todo.task}</td>
                    <td>
                      <button onClick={() => onChangeState(todo.id)}>
                        {todo.state ? "完了" : "作業中"}
                      </button>
                      <button onClick={() => onClickDelete(todo.id)}>削除</button>
                    </td>
                  </tr>
                );
              });
            } else {
              return compTodos.map((todo) => {
                return (
                  <tr key={todo.id}>
                    <td>{todo.id}</td>
                    <td>{todo.task}</td>
                    <td>
                      <button onClick={() => onChangeState(todo.id)}>
                        {todo.state ? "完了" : "作業中"}
                      </button>
                      <button onClick={() => onClickDelete(todo.id)}>削除</button>
                    </td>
                  </tr>
                );
              });
            }
          })()}
        </table>
      </div>
      <h2>新規タスクの追加</h2>
      <form onClick={onClickAdd}>
        <input value={task} onChange={onChangeInputTodo} />
        <button>追加</button>
      </form>
    </div>
  );
}

export default App;
