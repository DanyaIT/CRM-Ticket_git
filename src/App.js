
import "./App.css";
import DefaultLayout from "./layout/DefaultLayout";
import AppRouter from "./appRouter/AppRouter";
import { useSelector } from "react-redux";

function App() {

  const {isAuth} = useSelector(state => state.login)
  return (
    <div className="App">
      {isAuth? 
      <DefaultLayout>
        <AppRouter />
      </DefaultLayout>
      : <AppRouter />
      }
    
    </div>
  );
}

export default App;
