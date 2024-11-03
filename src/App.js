import TaskList from './components/TaskList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>todo-app</h1>
      {/* list below for css testing purposes */}
      <ul>
        <TaskList />
      </ul>
    </div>
  );
}

export default App;
