import './assets/styles/todo.css'
import './assets/styles/global.css'
import Header from './assets/components/layouts/header';
import Footer from './assets/components/layouts/footer';
import { Outlet } from 'react-router-dom';



const App = () => {
  return (

    <>
      <Header />
      {/* <TodoApp /> */}
      <Outlet />
      <Footer />
    </>
  );
}

export default App
