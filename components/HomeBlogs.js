import Link from "next/link";
import styles from "../styles/utils.module.scss";
import { RelDate } from "../lib/date";

export default function HomeBlogs({ posts }) {
	let showPosts = posts.map((post) => {
		return (
			<div key={post.id} className={styles.PostHome}>
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
			<h1 className={styles.HomeBlogName}>Code & Words. ☕</h1>
			{showPosts}
			<div className={styles.AllPosts}>
				<Link href="/blogs">
					<a>More Posts &rarr;</a>
				</Link>
			</div>
		</div>
	);
}
