export const ListItem = ({ todo }) => {
  return (
    <>
      <div>
        <h4>{todo.title}</h4>
        <p>{todo.description}</p>
      </div>
      <hr />
    </>
  );
};
