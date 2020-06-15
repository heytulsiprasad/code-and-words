import Link from "next/link";
import styles from "../styles/utils.module.css";
import { twitter } from "../constants/Socials";

export default function NavBar(props) {
	const handle = "@heytulsiprasad";

	let route;
	if (props.page.toLowerCase() === "home") {
		route = "/";
	} else {
		route = props.page.toLowerCase();
	}

	return (
		<nav className={styles.Nav}>
			<a href={twitter}>{handle}</a>
			<Link href={route}>
				<a>{props.page}</a>
			</Link>
		</nav>
	);
}
