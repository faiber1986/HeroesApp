import { HeroList } from "../components"
import { Footer, Navbar } from "../../ui/components"


export const DC = () => {
  return (
    <>
      <Navbar />
      <div className="content p-3">
        <h1>DC</h1>
        <hr />
        <HeroList publisher='DC Comics' />
      </div>
      <Footer />
    </>
  )
}
