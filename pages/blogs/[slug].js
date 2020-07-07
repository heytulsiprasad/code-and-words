import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { Date } from "../../lib/date";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../../components/CodeBlock";
import Codepen from "react-codepen-embed";

import { getAllPostIds, getPostData } from "../../lib/posts";
import styles from "../../styles/utils.module.scss";

export default function Blog({ postContent }) {
	let title = postContent.id.split("-").join(" ");

	return (
		<div>
			<Head>
				<title>{title}</title>
			</Head>
			<Layout>
				<NavBar />
				<div style={{ padding: "2.5rem 0" }}>
					<h1>{title}</h1>
					<div
						className={styles.BlogDate}
					>
						<Date dateStr={postContent.date} /> &bull;{" "}
						{postContent.time}
					</div>
				</div>
				<div style={{ margin: "2rem 0" }}>
					<ReactMarkdown
						className={styles.BlogContent}
						source={postContent.contentMd}
						escapeHtml={false}
						renderers={{
							code: CodeBlock,
							link: (props) => {
								if (props.href.includes("codepen")) {
									return (
										<Codepen
											height="500"
											hash={props.href.split("/pen")[1]}
											user={
												props.href
													.split("codepen.io/")[1]
													.split("/pen")[0]
											}
											loader={() => (
												<div>Codepen Loading...</div>
											)}
										/>
									);
								}

								return (
									<a href={props.href}>{props.children}</a>
								);
							},
						}}
					/>
					<div className={styles.MorePosts}>
						<Link href="/blogs">
							<a style={{ fontWeight: "500" }}>
								&larr; All Posts
							</a>
						</Link>
					</div>
				</div>
				<Footer />
			</Layout>
		</div>
	);
}

// We shall just return which all routes can possibly render this

export async function getStaticPaths() {
	const paths = getAllPostIds();

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const postContent = await getPostData(context.params.slug);

	return {
		props: {
			postContent,
		},
	};
}
