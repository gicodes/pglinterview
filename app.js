module.exports = ({ tasks }) => {
  const allTasks = tasks.map(
    task => {
      return `
      <div>
        <p>
        <form action="/allTasks/${task.id}/delete" method="POST">
          <button id="${task.id}">
          <h3>${task.Task}<h3>
          </button>
        </form>
        </p>
      </div>
      `
    }
  ).join('\n');

  return `
    <main>
      <form action="/" method="POST">
        <h2> ADD A NEW TASK </h2>
        <div>
          <label name="Task"/>
          <input type="text" name="Task" placeholder="Key in a task" />
          <button>Submit</button>
        </div>
      </form>
      <hr/>
      <div>
        <p>
          <h2>ALL TASKS</h2>
          Click on a task you want to remove
        </p>
        <br/>
        <div>
          ${allTasks}
        </div>
      </div>
    </main>
    `
}