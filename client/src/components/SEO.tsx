import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  ogType?: string
  keywords?: string
  schema?: object
  noIndex?: boolean
  article?: {
    publishedTime?: string
    modifiedTime?: string
    author?: string
  }
}

const SEO = ({
  title,
  description,
  canonical,
  ogImage = 'https://jkchaatcafe.com/jk-chaat-cafe-og-image.jpg',
  ogType = 'website',
  keywords,
  schema,
  noIndex = false,
  article,
}: SEOProps) => {
  const siteTitle = 'JK Chaat Cafe'
  const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`
  const siteUrl = 'https://jkchaatcafe.com'
  const canonicalUrl = canonical || `${siteUrl}${window.location.pathname}`

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
      
      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Article Schema (for blog posts) */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          <meta property="article:modified_time" content={article.modifiedTime} />
          <meta property="article:author" content={article.author || 'JK Chaat Cafe'} />
        </>
      )}
      
      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  )
}

export default SEO