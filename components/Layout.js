import styles from "../styles/utils.module.css";

export default function Layout({ children }) {
	return <div className={styles.Container}>{children}</div>;
}
