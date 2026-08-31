// Organization Schema - Sab pages pe common
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'JK Chaat Cafe',
  url: 'https://jkchaatcafe.com',
  logo: 'https://jkchaatcafe.com/jk-chaat-cafe-logo.png',
  description: 'JK Chaat Cafe is a leading Indian chaat and food franchise brand offering delicious chaat, fast food, beverages and franchise support across India.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-XXXXXXXXXX',
    contactType: 'business',
    availableLanguage: ['English', 'Hindi']
  },
  sameAs: [
    'https://www.instagram.com/jkchaatcafe',
    'https://www.facebook.com/jkchaatcafe',
    'https://www.youtube.com/jkchaatcafe'
  ]
}

// WebSite Schema - Home page ke liye
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'JK Chaat Cafe',
  url: 'https://jkchaatcafe.com',
  description: 'JK Chaat Cafe - Best Chaat & Food Franchise in India',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://jkchaatcafe.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
}

// Breadcrumb Schema
export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
})

// FAQ Schema
export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
})