import AppRoutes from "./routes/AppRoutes";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ToastContainer } from "react-toastify";

function App() {
   return (
      <Provider store={store}>
         <ToastContainer/>
         <AppRoutes />
      </Provider>
   );
}

export default App;
