import DataUriParser from "datauri/parser.js";
import path from "path";

const getDataUri = (file) => {
    const parser = new DataUriParser();
    const extName = path.extname(file.originalname).toString(); // spelling fix
    return parser.format(extName, file.buffer); // correct usage
};

export default getDataUri;

