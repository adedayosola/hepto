import { Meta, Navbar } from "components";

export const Layout = ( {
	children,
	title,
	keywords,
	description,
	navbar = true
} ) => {
	return (
		<>
			<Meta title={title} keywords={keywords} description={description} />
			<header>
				{navbar && <Navbar />}
			</header>
			<main data-testid="main">{children}</main>
		</>
	);
};
