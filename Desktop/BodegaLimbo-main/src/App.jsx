import "./app.css";
import Layout from "./components/layout";
import Router from "./components/routes";
import CartContextProvider from "./contexts/CartContext";

function App() {
  return (
    <div className="container">
      <CartContextProvider>
        <Layout>
          <Router />
        </Layout>
      </CartContextProvider>
    </div>
  );
};

export default App;