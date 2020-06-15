import Head from "next/head";
import Layout from "../../components/Layout";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { Date } from "../../lib/date";

import { getAllPostIds, getPostData } from "../../lib/posts";
import styles from "../../styles/utils.module.css";

export default function Blog({ postContent }) {
	let title = postContent.id.split("-").join(" ");
	let html = postContent.contentHTML;

	return (
		<div>
			<Head>
				<title>{title}</title>
			</Head>
			<Layout>
				<NavBar />
				<div style={{ padding: "2.5rem 0" }}>
					<h1>{title}</h1>
					<Date
						style={{ color: "rgb(153, 153, 153)" }}
						dateStr={postContent.date}
					/>
				</div>
				<div className={styles.EachPost}>
					<div dangerouslySetInnerHTML={{ __html: html }} />
				</div>
				<Footer />
			</Layout>
		</div>
	);
}

// We shall just return which all routes can possibly render this

export async function getStaticPaths() {
	const paths = getAllPostIds();
	// console.log(paths);

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const postContent = await getPostData(params.slug);
	return {
		props: {
			postContent,
		},
	};
}
