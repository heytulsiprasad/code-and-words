import Link from "next/link";
import styles from "../styles/utils.module.css";
import { Twitter, GitHub, LinkedIn, Mail } from "../lib/Icons";
import { twitter, github, mail, linkedin } from "../constants/Socials";

export default function Footer() {
	return (
		<footer className={styles.Footer}>
			<div className={styles.Logos}>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href={twitter}
					className={styles.PerLogo}
				>
					<Twitter />
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href={github}
					className={styles.PerLogo}
				>
					<GitHub />
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href={linkedin}
					className={styles.PerLogo}
				>
					<LinkedIn />
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href={`mailto:${mail}`}
					className={styles.PerLogo}
				>
					<Mail />
				</a>
			</div>
			<div style={{ fontSize: "12px" }}>
				&copy;
				{new Date().getFullYear()}
			</div>
		</footer>
	);
}
