import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      <ParentComponent />
      <EventBind />
      <FunctionClick />
      <ClassClick />
      <Counter />
      <Message />
      <Greet name='Suhani'>
        <p>This is a Children Props</p>
      </Greet>
      <Greet name='Yagnik'>
        <button>Action</button>
      </Greet>
      <Welcome name='Suhani' />
      <Welcome name='Yagnik' />
      <Hello />
    </div>
  );
}

export default App;
