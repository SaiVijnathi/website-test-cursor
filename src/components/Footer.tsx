import { Link } from 'react-router-dom'
import { products } from '../data/products'
import { IbexMark } from './IbexMark'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <IbexMark />
          <div>
            <p className="site-footer__name">ibexdata.ai</p>
            <p>Data platforms for teams that cannot afford surprise.</p>
          </div>
        </div>
        <ul className="site-footer__links">
          {products.map((product) => (
            <li key={product.slug}>
              <Link to={`/products/${product.slug}`}>{product.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="site-footer__copy">© {new Date().getFullYear()} ibexdata.ai</p>
    </footer>
  )
}
