
import "./App.css";
import DefaultLayout from "./layout/DefaultLayout";
import AppRouter from "./appRouter/AppRouter";

function App() {
  const isAuth = true
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
