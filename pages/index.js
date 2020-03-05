import fetch from "isomorphic-unfetch";

const Index = ({ users }) => (
  <div>
    {users.map((user, i) => (
      <div key={i}>{user.name}</div>
    ))}
  </div>
);

Index.getInitialProps = async () => {
  const response = await fetch(`${window.origin}/api/graphql`, {
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
};

export default Index;
