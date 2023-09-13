import { HeroList } from "../components"
import { Footer, Navbar } from '../../ui/components'

export const Marvel = () => {
  return (
    <>
      <Navbar />
      <div className="content p-3">
        <h1>Marvel</h1>
        <hr />
        <HeroList publisher='Marvel Comics' />
      </div>
      <Footer />
    </>
  )
}
