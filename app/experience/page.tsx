type Experience = {
	description: string;
	name: string;
	url: string;
};

export const metadata = {
	title: "Experience",
};

async function getExperiences(): Promise<Experience[]> {
	const experiences: Experience[] = [
		{
			description: "Machine Learning Engineer Intern June 2022 to July 2022",
			name: "HardCipher",
			url: "/certificates/hardcipher.pdf",
		},
	];
	return experiences;
}

export default async function ExperiencePage() {
	const projects = await getExperiences();

	return (
		<>
			<header>
				<h1 className="mx-auto mb-8 max-w-5xl px-4 text-4xl font-bold text-gray-100 md:mb-10 md:mt-32 md:text-5xl lg:mb-12 lg:text-[3.5rem]">
					Experience
				</h1>
			</header>

			<section className="max-w-5xl px-4 mx-auto mb-16">
				<div className="grid grid-cols-1 gap-4 auto-cols-max md:grid-cols-2">
					{projects.map((project) => (
						<a
							key={project.name}
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
							</article>
						</a>
					))}
				</div>
			</section>
		</>
	);
}
