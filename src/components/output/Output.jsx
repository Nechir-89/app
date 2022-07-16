// output
import './style.css'
export default function Output({ todos, inputValue, filterType }) {
  return (
    <div className="output-wrapper">
      {
        filterType === "start" ?
          todos.filter(todo => {
            const title = todo.title.toLowerCase();
            return title.startsWith(inputValue.toLowerCase());
          })
            .map(todo => <div key={todo.id} className="item">{todo.title}</div>)
          :
          todos.filter(todo => {
            const title = todo.title.toLowerCase();
            const value = inputValue.toLowerCase();
            return title.indexOf(value) !== -1;
          })
            .map(todo => <div key={todo.id} className="item">{todo.title}</div>)
      }
    </div>
  );
}
