import { ListItem } from "./listItem";
import "../components/listItem.css";

export const List = ({ data }) => {
  return (
    <div className="grid">
      {data.length === 0
        ? "No Data to display"
        : data.map((todo) => {
            return <ListItem todo={todo} key={todo._id} />;
          })}
    </div>
  );
};
