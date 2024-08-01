import Layout from "./layout";
import Header from "./floors/Header";


function App() {
    return (
        <Layout
          header={<Header />}
          main={<div>main</div>}
          footer={<div>footer</div>}
        />
    )
}

export default App
