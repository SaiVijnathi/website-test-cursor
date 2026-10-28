import type { Product } from '../types'

export const products: Product[] = [
  {
    slug: 'data-migration',
    name: 'Data Migration',
    tagline: 'Move platforms without losing trust in the data.',
    summary:
      'Plan, run, and validate large-scale migrations from legacy systems to modern warehouses and lakes.',
    description:
      'Ibex Data Migration takes you from source inventory to cutover with mapped schemas, automated transforms, and reconciliation at every stage. Teams keep business systems available while historical and live data land in the target with lineage you can audit.',
    capabilities: [
      'Schema mapping and type-safe transforms across relational, file, and cloud sources',
      'Phased cutover with dual-write windows and rollback checkpoints',
      'Row-level reconciliation so migrated volumes match source of truth',
      'Runbooks and audit trails for regulated and high-stakes environments',
    ],
    accent: 'gold',
  },
  {
    slug: 'data-integration',
    name: 'Data Integration',
    tagline: 'Connect sources into pipelines that stay current.',
    summary:
      'Ingest, unify, and deliver data from applications, databases, and files into the systems that need it.',
    description:
      'Ibex Data Integration stitches operational and analytical sources into dependable pipelines. It handles change data capture, batch windows, and API feeds with contracts that keep producers and consumers aligned as schemas evolve.',
    capabilities: [
      'Connectors for databases, SaaS apps, object storage, and event streams',
      'Orchestrated batch and near-real-time pipelines with retries and alerts',
      'Shared data contracts so downstream teams are not surprised by schema drift',
      'Delivery into warehouses, lakes, and operational stores from one control plane',
    ],
    accent: 'sage',
  },
  {
    slug: 'data-intelligence',
    name: 'Data Intelligence',
    tagline: 'Know what the data means before you act on it.',
    summary:
      'Catalog, quality, and insight so teams can find trusted data and measure it against business outcomes.',
    description:
      'Ibex Data Intelligence gives analysts, engineers, and operators a shared picture of assets, quality, and usage. Catalogs, checks, and lightweight analytics sit on the same metadata so decisions rest on data that is findable and defensible.',
    capabilities: [
      'Searchable catalog with owners, lineage, and business definitions',
      'Automated quality checks for freshness, completeness, and anomalies',
      'Usage and cost signals so teams invest in the datasets that matter',
      'Insights and metrics layers that sit on governed, documented assets',
    ],
    accent: 'copper',
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}
