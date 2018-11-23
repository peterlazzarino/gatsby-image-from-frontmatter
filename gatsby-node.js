const path = require("path");
const deepMap = require("deep-map");

exports.onCreateNode = ({ node }) => {
	if (node.internal.type === "MarkdownRemark") {
		deepMap(node.frontmatter, (value) => {
			let newPath = value;
			if (typeof value === "string" && path.isAbsolute(value) && value.indexOf("/assets/") !== -1) {
        const mdPath = node.fileAbsolutePath;
        newPath = path.join(`../../`, "static", value);
        console.log(newPath)
			}
			return newPath;
		}, {
			inPlace: true
		});
	}
};
