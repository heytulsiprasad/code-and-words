import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import Nav from "../components/NavBar";
import Profile from "../components/Profile";
import Blogs from "../components/Blogs";

import styles from "../styles/utils.module.css";

export default function Home() {
	const [page, setPage] = useState("About");

	return (
		<div>
			<Head>
				<title>Awesome Blog!</title>
			</Head>
			<Layout>
				<Nav page={page} />
				<Profile />
				<Blogs />
			</Layout>
		</div>
	);
}
