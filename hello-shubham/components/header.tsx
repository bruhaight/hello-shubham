import Link from "next/link";

export default function Header() {
	const links = [
		{ href: "/projects", label: "Projects" },
		{ href: "/experience", label: "Experience" },
		{ href: "/contact", label: "Contact" },
	];

	return (
		<header className="flex flex-wrap max-w-5xl px-4 mx-auto my-8 tracking-tight">
			<Link
				href="/"
				className="text-xl font-bold text-gray-100 hover:underline tablet:text-2xl"
			>
				Shubam Kharbanda
			</Link>
			<nav className="text-lg tablet:ml-auto tablet:text-xl">
				<ul className="flex gap-2 my-4 tablet:m-0">
					{links.map((link) => (
						<li key={link.href}>
							<Link href={link.href} className="hover:underline">
								{link.label}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
