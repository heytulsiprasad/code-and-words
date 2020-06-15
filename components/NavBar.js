import Link from "next/link";
import styles from "../styles/utils.module.css";
import { twitter } from "../constants/Socials";

export default function NavBar(props) {
	const handle = "@heytulsiprasad";

	return (
		<nav className={styles.Nav}>
			<a href={twitter}>{handle}</a>
			<Link href={`/${props.page.toLowerCase()}`}>
				<a>{props.page}</a>
			</Link>
		</nav>
	);
}
