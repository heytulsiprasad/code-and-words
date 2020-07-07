import { Fragment } from "react";
import Link from "next/link";
import styles from "../styles/utils.module.scss";

export default function Profile() {
	return (
		<Fragment>
			<div className={styles.profileBox}>
				<Link href="/">
					<a>
						<img className={styles.Profile} src="/profile.jpg" />
					</a>
				</Link>
				<Link href="/">
					<a>
						<h1 className={styles.heroName}>Tulsi Prasad</h1>
					</a>
				</Link>
			</div>
			<div className={styles.Intro}>
				<p>
					Hello, I'm <a href="#">Tulsi</a>. I'm a{" "}
					<strong>web software developer</strong> and engineer by
					passion. I live in <strong>India</strong>. I learn by making
					(and breaking) things. I sleep at night sometimes and write
					code and words.
				</p>
			</div>
		</Fragment>
	);
}
