interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://blog-template-gray.vercel.app/', // Write here your website url
	author: 'Diario Geek', // Site author
	title: 'Diario Geek', // Site title.
	description:
		'Diario Geek es un blog dedicado a Linux, software libre y tecnología open source. Descubre tutoriales, análisis de herramientas y reflexiones sobre el mundo digital desde una perspectiva independiente y geek.', // Description to display in the meta tags
	lang: 'es-ES',
	ogLocale: 'es_ES',
	shareMessage: 'Comparte este post', // Message to share a post on social media
	paginationSize: 4 // Number of posts per page
}
