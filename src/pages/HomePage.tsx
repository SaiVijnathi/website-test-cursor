import { Link } from 'react-router-dom'
import { products } from '../data/products'

const steps = ['01', '02', '03']

export function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero__glow" aria-hidden="true" />
        <svg className="hero__ridges" viewBox="0 0 1200 420" aria-hidden="true">
          <path d="M0 320 C 140 260, 220 210, 340 230 C 480 258, 540 140, 680 160 C 820 180, 900 90, 1040 120 C 1120 138, 1160 180, 1200 210 V 420 H 0 Z" />
          <path d="M0 360 C 180 300, 280 280, 400 300 C 560 328, 620 240, 780 250 C 920 260, 980 200, 1200 240 V 420 H 0 Z" />
        </svg>
        <div className="hero__inner">
          <p className="eyebrow">Enterprise data, without the fog</p>
          <h1 id="hero-heading">
            Move, unify, and explain the data your business runs on.
          </h1>
          <p className="hero__lede">
            ibexdata.ai helps organizations leave brittle legacy estates and operate
            on data they can trust. We migrate what you already have, integrate
            what keeps arriving, and make the result intelligible — so analytics,
            operations, and compliance share one foundation.
          </p>
          <div className="hero__actions">
            {products.map((product) => (
              <Link
                key={product.slug}
                className={`chip chip--${product.accent}`}
                to={`/products/${product.slug}`}
              >
                {product.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="products" aria-labelledby="products-heading">
        <div className="section-heading">
          <p className="eyebrow">Three products</p>
          <h2 id="products-heading">The path from source systems to decisions</h2>
          <p>
            Each product stands on its own. Together they cover migration,
            ongoing pipelines, and the intelligence layer that keeps data usable.
          </p>
        </div>
        <div className="product-grid">
          {products.map((product, index) => (
            <article
              key={product.slug}
              className={`product-card product-card--${product.accent}`}
            >
              <div className="product-card__top">
                <span className="product-card__index">{steps[index]}</span>
                <h3>{product.name}</h3>
              </div>
              <p className="product-card__tagline">{product.tagline}</p>
              <p>{product.summary}</p>
              <Link className="card-link" to={`/products/${product.slug}`}>
                Explore {product.name}
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
