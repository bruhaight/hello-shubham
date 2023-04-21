import Image from "next/image";
import Link from "next/link";
import {
	EnvelopeIcon,
	DocumentTextIcon,
	Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import styles from "~/styles/aloha.module.css";
import image from "~/public/images/shubham.png";

export default function Aloha() {
	return (
		<div className="flex flex-col items-center animate-appear">
			<p className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl md:text-6xl lg:text-7xl lg:leading-none">
				Hello <span className={`inline-block ${styles.wave}`}>👋</span>,
				I&apos;m
			</p>
			<p className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl md:text-6xl lg:text-7xl lg:leading-none">
				<span className="text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 bg-clip-text">
					Shubam Kharbanda
				</span>
				.
			</p>
			<Image
				className="my-8 animate-tada rounded-xl sm:my-16 sm:rounded-2xl"
				src={image}
				alt="Shubam Kharbanda"
				width={300}
				height={300}
				priority
			/>
			<p className="my-2 md:text-lg lg:text-xl">
				💻 I&apos;m a software engineer living in Delhi, India
			</p>
			<p className="my-2 md:text-lg lg:text-xl">
				💕 Lover of Hip hop music and a big fan of the NBA 🏀
			</p>
			<div className="grid grid-cols-1 gap-2 my-8 sm:grid-cols-2">
				<Link
					className="inline-flex items-center justify-center p-4 font-bold text-center text-white bg-pink-700 rounded-md gap-x-2 whitespace-nowrap bg-gradient-to-r from-purple-800 to-pink-600 hover:bg-pink-600 hover:from-purple-700 hover:to-pink-500"
					href="#newsletter-signup"
				>
					<Cog6ToothIcon className="w-5 h-5" aria-hidden="true" />
					See Projects
				</Link>
				<Link
					className="inline-flex items-center justify-center p-4 font-bold text-gray-200 rounded-md shadow-sm gap-x-2 bg-white/10 hover:bg-white/20"
					href="/about"
				>
					<DocumentTextIcon className="w-5 h-5" aria-hidden="true" />
					My Resume
				</Link>
			</div>
		</div>
	);
}
