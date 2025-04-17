import AppRoutes from "./AppRoutes";
import { UserProvider } from "./services/UserContext";


function App() {
  return (
    <>
    <UserProvider>
        <AppRoutes/>
      </UserProvider>
    </>
  );
}

export default App;
