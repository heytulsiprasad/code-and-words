import Link from "next/link";
import styles from "../styles/utils.module.css";

export default function NavBar(props) {
	const handle = "@heytulsiprasad";

	return (
		<nav className={styles.Nav}>
			<a href="https://twitter.com/heytulsiprasad">{handle}</a>
			<Link href={`/${props.page.toLowerCase()}`}>
				<a>{props.page}</a>
			</Link>
		</nav>
	);
}
