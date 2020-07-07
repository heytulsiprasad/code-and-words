import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import styles from "../styles/utils.module.scss";
import { Date } from "../lib/date";
import { getSortedPostData } from "../lib/posts";

export default function Blogs({ allPostsData }) {
	let posts = allPostsData.map((post) => {
		return (
			<div key={post.id} className={styles.PostBlog}>
				<h2>
					<Link href="/blogs/[slug]" as={`/blogs/${post.id}`}>
						<a>{post.title}</a>
					</Link>
				</h2>
				<p className={styles.Date}>
					<Date dateStr={post.date} /> &bull; {post.time}
				</p>
			</div>
		);
	});

	return (
		<div>
			<Head>
				<title>Blog — Tulsi Prasad</title>
			</Head>
			<Layout>
				<NavBar />
				<div className={styles.AllBlogs}>
					<h1 className={styles.BlogName}>Code and Words. ☕</h1>
					{posts}
				</div>
				<Footer />
			</Layout>
		</div>
	);
}

export async function getStaticProps() {
	const allPostsData = getSortedPostData();

	return {
		props: {
			allPostsData,
		},
	};
}
