import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import Nav from "../components/NavBar";
import Profile from "../components/Profile";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import { getSortedPostData } from "../lib/posts";

import styles from "../styles/utils.module.css";

export default function Home({ allPostsData }) {
	const [page, setPage] = useState("About");

	const homePosts = allPostsData.slice(0, 2);

	return (
		<div>
			<Head>
				<title>Awesome Blog!</title>
			</Head>
			<Layout>
				<Nav page={page} />
				<Profile />
				<Blogs posts={homePosts} />
				<Footer />
			</Layout>
		</div>
	);
}

export async function getStaticProps() {
	const allPostsData = getSortedPostData();
	// console.log(allPostsData);
	return {
		props: {
			allPostsData,
		},
	};
}
