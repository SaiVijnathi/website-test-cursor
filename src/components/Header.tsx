import { NavLink } from 'react-router-dom'
import { products } from '../data/products'
import { IbexMark } from './IbexMark'

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink to="/" end className="brand" aria-label="Ibex Data home">
          <IbexMark />
          <span className="brand__name">ibexdata.ai</span>
        </NavLink>
        <nav className="nav" aria-label="Products">
          {products.map((product) => (
            <NavLink
              key={product.slug}
              to={`/products/${product.slug}`}
              className={({ isActive }) =>
                isActive ? 'nav__link nav__link--active' : 'nav__link'
              }
            >
              {product.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
