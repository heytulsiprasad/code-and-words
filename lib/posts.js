import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostData() {
	// Get file names from posts dir
	const fileNames = fs.readdirSync(postsDirectory);
	const allPostsData = fileNames.map((fileName) => {
		// Remove .md from filename to get id
		const id = fileName.replace(/\.md$/, "").split(" ").join("-");

		// Read md file as string
		const fullPath = path.join(postsDirectory, fileName);

		// Contents of all the files are being read here
		const fileContents = fs.readFileSync(fullPath, "utf8");

		// Use gray-matter to parse the post metadata section
		const matterResult = matter(fileContents);

		// Comboine the data with the id
		// `id` is the name of the md file
		// We have the metadata inside data object inside matterRes
		return {
			id,
			...matterResult.data,
		};
	});

	return allPostsData.sort((a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	});
}
