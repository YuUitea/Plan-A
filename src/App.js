import './App.css';
import TodoApp from "./components/todo/TodoApp";
import 'bootstrap/dist/css/bootstrap.css';
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas);

function App() {
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}

export default App;
