import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostData() {
	// Get file names from posts dir
	const fileNames = fs.readdirSync(postsDirectory);
	const allPostsData = fileNames.map((fileName) => {
		// Remove .md from filename to get id
		const id = fileName.replace(/\.md$/, "").split(" ").join("-");

		// Get fullpath of a post
		const fullPath = path.join(postsDirectory, fileName);

		// Contents of all the files are being read here
		const fileContents = fs.readFileSync(fullPath, "utf-8");

		// Calculate the reading time
		const readTime = readingTime(fileContents);

		// Use gray-matter to parse the post metadata section
		const matterResult = matter(fileContents);

		// Comboine the data with the id
		// `id` is the name of the md file
		// We have the metadata inside data object inside matterRes
		return {
			id,
			time: readTime.text,
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

export function getAllPostIds() {
	const filenames = fs.readdirSync(postsDirectory);

	return filenames.map((file) => {
		return {
			params: {
				slug: file.replace(/\.md$/, "").split(" ").join("-"),
			},
		};
	});
}

export async function getPostData(id) {
	const fullPath = path.join(postsDirectory, `${id.split("-").join(" ")}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf-8");

	// Calculate the reading time
	const readTime = readingTime(fileContents);

	// Use gray-matter to parse the meta part
	const matterResult = matter(fileContents);

	// Combine the data with id
	return {
		id,
		time: readTime.text,
		contentMd: matterResult.content.toString(),
		...matterResult.data,
	};
}
