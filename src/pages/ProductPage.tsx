import { Link, Navigate, useParams } from 'react-router-dom'
import { getProductBySlug } from '../data/products'

export function ProductPage() {
  const { slug } = useParams<{ slug: string }>()
  const product = slug ? getProductBySlug(slug) : undefined

  if (!product) {
    return <Navigate to="/" replace />
  }

  return (
    <article className={`product-page product-page--${product.accent}`}>
      <header className="product-hero">
        <div className="product-hero__inner">
          <p className="eyebrow">Product</p>
          <h1>{product.name}</h1>
          <p className="product-page__tagline">{product.tagline}</p>
        </div>
      </header>
      <div className="product-body">
        <p className="lede">{product.description}</p>
        <h2>What it does</h2>
        <ul className="capability-list">
          {product.capabilities.map((capability) => (
            <li key={capability}>{capability}</li>
          ))}
        </ul>
        <Link className="card-link" to="/">
          <span aria-hidden="true">←</span>
          Back to all products
        </Link>
      </div>
    </article>
  )
}
