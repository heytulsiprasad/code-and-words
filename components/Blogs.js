import Link from "next/link";
import styles from "../styles/utils.module.css";

export default function Blogs() {
	return (
		<div className={styles.Blogs}>
			<h1 className={styles.BlogHead}>Code & Words. ☕</h1>
			<div className={styles.Post}>
				<h2>
					<Link href="#">
						<a>What is Static Generation?</a>
					</Link>
				</h2>
				<p className={styles.Date}>January 15, 2020</p>
			</div>
			<div className={styles.Post}>
				<h2>
					<Link href="#">
						<a>What is Server-side Rendering?</a>
					</Link>
				</h2>
				<p className={styles.Date}>January 15, 2020</p>
			</div>
			<div className={styles.Post}>
				<h2>
					<Link href="#">
						<a>Static Generation v.s. Server-side Rendering</a>
					</Link>
				</h2>
				<p className={styles.Date}>January 15, 2020</p>
			</div>
			<div style={{ marginTop: "2rem" }}>
				<Link href="/blog">
					<a style={{ fontWeight: "500" }}>More Posts &rarr;</a>
				</Link>
			</div>
		</div>
	);
}
