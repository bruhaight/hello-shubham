type Repository = {
	description: string;
	id: string;
	primaryLanguage: {
		name: string;
		color: string;
	};
	name: string;
	stargazerCount: number;
	url: string;
};

export const metadata = {
	title: "Projects",
};

async function getProjects(): Promise<Repository[]> {
	const projects: Repository[] = [
		{
			description:
				"Predicting how the stock market will perform with time-series data",
			id: "1",
			name: "Stock Market Prediction",
			primaryLanguage: {
				name: "Python",
				color: "#3572A5",
			},
			stargazerCount: 0,
			url: "https://drive.google.com/file/d/11vgEY6E7B0D-9fGJ1GFeZvwvgKgeu2RO/view?usp=drivesdk",
		},
	];
	return projects;
}

export default async function ProjectsPage() {
	const projects = await getProjects();

	return (
		<>
			<header>
				<h1 className="mx-auto mb-8 max-w-5xl px-4 text-4xl font-bold text-gray-100 md:mb-10 md:mt-32 md:text-5xl lg:mb-12 lg:text-[3.5rem]">
					Projects
				</h1>
			</header>

			<section className="max-w-5xl px-4 mx-auto mb-16">
				<div className="grid grid-cols-1 gap-4 auto-cols-max md:grid-cols-2">
					{projects.map((project) => (
						<a
							key={project.id}
							href={project.url}
							className="block cursor-pointer rounded-md border border-gray-700 p-4 shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-1.5"
						>
							<article>
								<h2 className="text-2xl font-bold">
									<span className="text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text">
										{project.name}
									</span>
								</h2>
								<p className="my-2">{project.description}</p>
								<p>
									<span
										style={{ backgroundColor: project.primaryLanguage.color }}
										className="relative inline-block w-3 h-3 rounded-full top-px"
									/>{" "}
									<span itemProp="programmingLanguage">
										{project.primaryLanguage.name}
									</span>
									{project.stargazerCount > 0 && (
										<span>
											<span role="img" aria-label="star" className="pl-4 pr-1">
												⭐️
											</span>
											{project.stargazerCount}
										</span>
									)}
								</p>
							</article>
						</a>
					))}
				</div>
			</section>
		</>
	);
}
