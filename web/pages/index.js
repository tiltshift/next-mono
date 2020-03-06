import fetch from "isomorphic-unfetch";

const Index = ({ users }) => (
  <div>
    {users.map((user, i) => (
      <div key={i}>{user.name}</div>
    ))}
  </div>
);

Index.getInitialProps = async ctx => {
  const response = await fetch(
    "https://next-mono.tiltshift.now.sh/api/graphql",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ query: "{ users { name } }" })
    }
  );

  const {
    data: { users }
  } = await response.json();

  return { users };
};

export default Index;
