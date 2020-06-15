import { format, parseISO } from "date-fns";

export default function Date({ dateStr }) {
	const postDate = parseISO(dateStr);
	return <time dateTime={dateStr}>{format(postDate, "LLLL d, yyyy")}</time>;
}
