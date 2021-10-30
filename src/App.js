import './App.css';
import TodoApp from "./components/todo/TodoApp";
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee);

function App() {
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}

export default App;
