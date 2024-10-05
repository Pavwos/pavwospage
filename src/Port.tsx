import { useState } from "react";
import type { FC } from "react";
import {
	FaLinkedin,
	FaSquareGithub,
	FaSquareInstagram,
	FaMoon,
	FaSun,
} from "react-icons/fa6";

const Portfolio: FC = () => {
	const [darkMode, setDarkMode] = useState(false);

	const mudaTema = () => {
		setDarkMode(!darkMode);
		if (!darkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	};
	return (
		<div
			className={`min-h-screen flex flex-col items-center justify-center text-white ${darkMode ? "bg-[url('/src/assets/fundopreto.png')]" : "bg-[url('/src/assets/fundobranco.png')]"} transition-all`}
		>
			<button
				type="button"
				className="absolute text-3xl top-4 right-4 font-bold m-4 hover:text-opacity-65 rounded transition-colors ease-in-out duration-200"
				onClick={mudaTema}
			>
				{darkMode ? (
					<FaSun className="text-yellow-300" />
				) : (
					<FaMoon className="text-neutral-900" />
				)}
			</button>
			<div
				className={`flex flex-col items-center mt-auto p-10 w-auto ${darkMode ? "bg-neutral-50 text-neutral-800" : "bg-neutral-900 text-neutral-50 "} rounded-xl`}
			>
				<h1 className="text-4xl font-bold mb-6 mt-auto">Raphael Pavanelli</h1>

				<h2 className="text-3xl font-semibold mb-4">Contato</h2>
				<ul
					className={` flex flex-col justify-normal mb-8 text-4xl ${darkMode ? "text-neutral-900" : "text-white"}`}
				>
					<li className="flex items-center justify-start gap-x-2">
						<a href="https://www.linkedin.com/in/raphael-pavanelli-1a3a712b3/">
							<FaLinkedin />
						</a>
						<a href="##" className="text-xl">
							raphael-pavanelli
						</a>
					</li>
					<li className="flex items-center justify-start gap-x-2">
						<a href="https://instagram.com/pawvos">
							<FaSquareInstagram />
						</a>
						<a href="##" className="text-xl">
							pawvos
						</a>
					</li>
				</ul>
				<h2 className="text-3xl font-semibold mb-4">Portifólio</h2>
				<ul
					className={` flex flex-col justify-normal mb-8 text-4xl ${darkMode ? "text-neutral-900" : "text-white"}`}
				>
					<li className="flex items-center justify-center gap-x-2">
						<a href="https://github.com/pavwos" className="text-4xl">
							<FaSquareGithub />
						</a>
						<a href="##" className="text-xl">
							pavwos
						</a>
					</li>
				</ul>
			</div>

			<footer className="mt-auto mb-4">
				<p className={`${darkMode ? "text-neutral-50" : "text-neutral-950"}`}>
					© {new Date().getFullYear()} Pavwos. Todos os direitos reservados.
				</p>
			</footer>
		</div>
	);
};

export default Portfolio;
