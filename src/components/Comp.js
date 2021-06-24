export const Comp = () => {
  // const [compTasks, setCompTasks] = useState(["task3", "task4"]);
  // const onClickReturn = (index) => {
  //   const newTasks = [...tasks, compTasks[index]];
  //   const newCompTasks = [...compTasks];

  //   newCompTasks.splice(index, 1);

  //   setTasks(newTasks);
  //   setCompTasks(newCompTasks);
  // };

  return (
    <div>
      完了
      {/* <div>
        <h2>完了のTODO</h2>
        <ul>
          {compTasks.map((task, index) => {
            return (
              <div key={task}>
                <li>{task}</li>
                <button onClick={() => onClickReturn(index)}>完了</button>
              </div>
            );
          })}
        </ul>
      </div> */}
    </div>
  );
};
