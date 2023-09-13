import { useNavigate, useParams } from "react-router-dom"
import { Footer, Navbar } from "../../ui/components"
import { getHeroById } from "../helpers";
import { useMemo } from "react";


export const Hero = () => {

  const { id, ...rest } = useParams();
  const hero = useMemo( () => getHeroById( id ), [id]);
  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1)
  }

  if (!hero) {
    return (<div></div>)
  }

  const imageUrl = `../../../public/heroes/${ id }.jpg`

  return (
    <>
      <Navbar />
      <div className="row p-3">
        <div className="col-4">
          <img src={ imageUrl }  alt={ hero.superhero } className="img-thumbnail animate__animated animate__backInUp" />
        </div>
        <div className="col-8">
          <h3>{ hero.superhero }</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"> <b>Alter ego: </b> {hero.alter_ego} </li>
            <li className="list-group-item"> <b>Publisher: </b> {hero.publisher} </li>
            <li className="list-group-item"> <b>First appearance: </b> {hero.first_appearance} </li>
          </ul>

          <h5 className="mt-3">Characters:</h5>
          <p>{ hero.characters }</p>
          <button 
            className="btn btn-outline-danger"
            onClick={ onBack }
          >Back</button>

        </div>
      </div>
      <Footer />
    </>
  )
}
