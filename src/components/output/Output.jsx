// output
import './style.css'
export default function Output({ todos, inputValue }) {
  return (
    <>
      {todos
        .filter(todo => {
          const title = todo.title.toLowerCase();
          return title.startsWith(inputValue.toLowerCase());
        })
        .map(todo => <div key={todo.id} className="item">{todo.title}</div>
        )}
    </>
  );
}
