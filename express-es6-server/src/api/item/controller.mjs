import connection from "../../config/database.mjs";

export const find = async (req, res) => {
  try {
    const query = `SELECT * FROM ITEM`;
    const [results] = await connection.query(query);

    res.send(results);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

export const create = async (req, res) => {
}

export default { find, create };
