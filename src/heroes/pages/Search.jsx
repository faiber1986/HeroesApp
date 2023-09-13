import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import { Footer, Navbar } from "../../ui/components"
import queryString from "query-string";
import { getHeroByName } from "../helpers";
import { HeroCard } from "../components";


export const Search = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse( location.search )
  const heroes = getHeroByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${ searchText.toLowerCase().trim() }`)
  }

  return (
    <>
      <Navbar />
      <h1 className="p-3">Search</h1>
      <hr />
      <div className="row p-3">
        <div className="col-5">
          <h4>Searching</h4>
          <form onSubmit={ onSearchSubmit }>
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Search a hero"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />
            <button className="btn btn-outline-dark mt-3">Search</button>
          </form>
        </div>

        <div className="col-7 mt-2">
          <h4>Results:</h4>
          {
            ( q === '' ) ? <div className="alert alert-primary">Search a hero</div>
            : (heroes.length === 0) && <div className="alert alert-danger">There are no results for <b>{ q }</b></div>
          }

          {
            heroes.map( hero => (
              <HeroCard key={ hero.id } {...hero } />
            ))
          }

        </div>

      </div>
      <Footer />
    </>
  )
}
