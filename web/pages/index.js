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
    const response = await fetch("why does it matter what is in this string?", {
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
