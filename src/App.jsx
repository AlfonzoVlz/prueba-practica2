import { Articulo } from "./components/article"
import { Cards } from "./components/Card";

function App() {

  return (
    <>
      <main>
        <Articulo/>
        <div className="cards">
          <Cards variant="img1"/>
          <Cards variant="img2" />
          <Cards variant="img3" />
          <Cards variant="img4" />
        </div>
      </main>
    </>
  )
}

export default App
