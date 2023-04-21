import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Aloha from "~/components/aloha";
import Posts from "~/components/posts";
import NewsletterSignup from "~/components/newsletter-signup";

export const metadata = {
	title: "Hello",
	description:
		"I'm a software engineer living in Delhi, India. Lover of Hip hop music and a big fan of the NBA.",
};

export default function Home() {
	const posts = allPosts
		.sort((a, b) => {
			return compareDesc(new Date(a.date), new Date(b.date));
		})
		.slice(0, 4);

	return (
		<>
			<section className="max-w-5xl px-4 mx-auto my-16 lg:my-32">
				<Aloha />
			</section>
		</>
	);
}
