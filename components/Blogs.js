import Link from "next/link";
import styles from "../styles/utils.module.css";
import Date from "../lib/date";

export default function Blogs({ posts }) {
	let showPosts = posts.map((post) => {
		let link = post.title.split(" ").join("-");
		return (
			<div key={post.id} className={styles.Post}>
				<h2>
					<Link href={`/blogs/${link}`}>
						<a>{post.title}</a>
					</Link>
				</h2>
				<p className={styles.Date}>
					<Date dateStr={post.date} />
				</p>
			</div>
		);
	});

	return (
		<div className={styles.Blogs}>
			<h1 className={styles.BlogHead}>Code & Words. ☕</h1>
			{showPosts}
			<div style={{ marginTop: "2rem" }}>
				<Link href="/blog">
					<a style={{ fontWeight: "500" }}>More Posts &rarr;</a>
				</Link>
			</div>
		</div>
	);
}
