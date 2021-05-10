import connection from "../../config/database.js";
import ErrorGenerator from "../../helpers/error-generator.js";

export const upload = async (req, res) => {
  try {
    if (!req.file) {
      return res
        .status(400)
        .send(ErrorGenerator("image is required", "any.required", "image"));
    }
    
    const { fieldname, encoding, mimetype, filename, size } = req.file;
    const data = {
      fieldname,
      encoding,
      mimetype,
      filename,
      size,
      path: "/uploads",
      url: `/uploads/${filename}`,
    };

    const query = `INSERT INTO MEDIA SET ?`;
    const [result] = await connection.query(query, data);

    res.send({
      ...data,
      id: result.insertId,
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
export default { upload };
