import React, { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import Profile from "../components/Profile";
import HomeBlogs from "../components/HomeBlogs";
import Footer from "../components/Footer";
import { getSortedPostData } from "../lib/posts";

import styles from "../styles/utils.module.css";

export default function Home({ allPostsData }) {
	return (
		<div>
			<Head>
				<title>Home — Tulsi Prasad</title>
			</Head>
			<Layout>
				<NavBar />
				<Profile />
				<HomeBlogs posts={allPostsData.slice(0, 2)} />
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
