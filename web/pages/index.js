import fetch from "isomorphic-unfetch";
import { BobSaget } from "@nextmono/components";

const Index = ({ stars }) => (
  <div>
    TURN DOWN FOR WHAT: <BobSaget />
    <div>{stars}</div>
  </div>
);

const fetchUsers = async () => {
  try {
    const response = await fetch("https://next-mono.now.sh/api/graphql", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ query: "{ users { name } }" })
    });

    const {
      data: { users }
    } = await response.json();
    return { users };
  } catch (error) {
    console.error("error", error);
  }
};
Index.getInitialProps = async () => {
  const res = await fetch("https://api.github.com/repos/zeit/next.js");
  const json = await res.json();
  return { stars: json.stargazers_count };
};

export default Index;
