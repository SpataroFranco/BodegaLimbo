import Layout from "./components/layout";
import Router from "./components/routes";
import "./app.css";

function App() {
  return (
    <div className="container">
      <Layout>
        <Router/>
      </Layout>
    </div>
  );
}

export default App;
