import Link from "next/link";
import styles from "../styles/utils.module.css";
import { twitter } from "../constants/Socials";

export default function NavBar() {
	const handle = "@heytulsiprasad";

	return (
		<nav className={styles.Nav}>
			<a target="_blank" rel="noopener noreferrer" href={twitter}>
				{handle}
			</a>
			<div className={styles.NavLinks}>
				<Link href="/">
					<a>Home</a>
				</Link>
				<Link href="/blogs">
					<a>Blog</a>
				</Link>
				<Link href="/about">
					<a>About</a>
				</Link>
			</div>
		</nav>
	);
}
