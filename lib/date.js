import { format, parseISO, formatRelative } from "date-fns";
import moment from "moment";

export function Date({ dateStr, ...rest }) {
	const postDate = parseISO(dateStr);
	return (
		<time dateTime={dateStr} {...rest}>
			{format(postDate, "LLLL d, yyyy")}
		</time>
	);
}

export function RelDate({ dateStr, ...rest }) {
	let dt = dateStr.split("-").join("");
	return (
		<time dateTime={dateStr} {...rest}>
			{moment(dt).startOf("day").fromNow()}
		</time>
	);
}
