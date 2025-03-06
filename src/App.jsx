import './assets/styles/todo.css'
import './assets/styles/global.css'
import Header from './assets/components/layouts/header';
import Footer from './assets/components/layouts/footer';
import { Outlet } from 'react-router-dom';

const ParentComponent = (props) => {
  return (
    <div>ParentComponent</div>
  )
}

const ChildComponent = (props) => <div>ChildComponent</div>


const App = () => {
  return (

    <>
      {/* inside components => children: 'inside component' */}
      <Header />
      {/* <TodoApp /> */}
      <Outlet />
      <Footer />
    </>
  );
}

export default App
