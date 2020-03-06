import fetch from "isomorphic-unfetch";
import { BobSaget } from "@nextmono/components";

const Index = ({ stars }) => (
  <div>
    TURN DOWN FOR WHAT: <BobSaget />
    <div>{stars}</div>
  </div>
);

Index.getInitialProps = async () => {
  /*
  try {
    
    const response = await fetch("http://localhost:3000/api/graphql", {
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
  */

  const res = await fetch("https://api.github.com/repos/zeit/next.js");
  const json = await res.json();
  return { stars: json.stargazers_count };
};

export default Index;
