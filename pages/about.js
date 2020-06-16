import Link from "next/link";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import styles from "../styles/utils.module.css";
import ReactMarkdown from "react-markdown";

import { getAbout } from "../lib/about";

export default function About({ about }) {
	return (
		<div>
			<Head>
				<title>About — Tulsi Prasad</title>
			</Head>
			<Layout>
				<NavBar />
				<div className={styles.profileBox}>
					<Link href="/">
						<a>
							<img
								className={styles.Profile}
								src="/profile.jpg"
							/>
						</a>
					</Link>
				</div>
				<div style={{ marginTop: "5rem" }}>
					<ReactMarkdown source={about} />
				</div>
				<Footer />
			</Layout>
		</div>
	);
}

export async function getStaticProps() {
	const aboutData = await getAbout();

	return {
		props: {
			about: aboutData.about.toString(),
		},
	};
}
