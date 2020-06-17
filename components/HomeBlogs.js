import Link from "next/link";
import styles from "../styles/utils.module.css";
import { RelDate } from "../lib/date";

export default function HomeBlogs({ posts }) {
	console.log();
	let showPosts = posts.map((post) => {
		return (
			<div key={post.id} className={styles.Post}>
				<h2>
					<Link href="/blogs/[slug]" as={`/blogs/${post.id}`}>
						<a>{post.title}</a>
					</Link>
				</h2>
				<p className={styles.Date}>
					<RelDate dateStr={post.date} /> &bull; {post.time}
				</p>
			</div>
		);
	});

	return (
		<div className={styles.Blogs}>
			<h1 className={styles.BlogHead}>Code & Words. ☕</h1>
			{showPosts}
			<div style={{ marginTop: "2rem" }}>
				<Link href="/blogs">
					<a style={{ fontWeight: "500" }}>More Posts &rarr;</a>
				</Link>
			</div>
		</div>
	);
}
