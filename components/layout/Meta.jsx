import Head from "next/head";

export const Meta = ( {
	title = "Welcome",
	keywords,
	description,
} ) => {
	const name = "Hepto Meal system";
	const metaContent = "Hepto Meal system";

	return (
		<Head>
			<meta data-charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="title" content={name} />
			<meta name="author" content={name} />
			<meta name="theme-color" content="#43703F" />
			<meta name="pagename" content={metaContent} />
			<meta itemProp="name" content={name} />
			<meta property="og:site_name" content={name} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={name} />
			<meta property="og:description" content={metaContent} />
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<link rel="icon" href="/favicon.ico" />
			<title>{name}</title>
		</Head>
	);
};
