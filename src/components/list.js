import { ListItem } from "./listItem";

export const List = ({ data }) => {
  return (
    <div>
      {data.length === 0
        ? "No Data to display"
        : data.map((todo) => {
            return <ListItem todo={todo} key={todo._id} />;
          })}
    </div>
  );
};
