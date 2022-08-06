import pokemon from "../../__mocks__/pokemon-list";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(pokemon);
  } else {
    // Handle any other HTTP method
  }
}
