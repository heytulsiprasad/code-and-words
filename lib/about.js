import fs from "fs";
import path from "path";

const aboutDir = path.join(process.cwd(), "constants");

export async function getAbout() {
	const filePath = path.join(aboutDir, "About.md");
	const about = fs.readFileSync(filePath, "utf-8");

	return { about };
}
