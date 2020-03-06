import fetch from "isomorphic-unfetch";

const Index = ({ users }) => (
  <div>
    TURN DOWN FOR WHAT
    {users.map((user, i) => (
      <div key={i}>{user.name}</div>
    ))}
  </div>
);

Index.getInitialProps = async () => {
  try {
    console.log("TRY");
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
  return { users: [] };
};

export default Index;
