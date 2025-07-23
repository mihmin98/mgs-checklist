import { appData } from "../../data/data";
import ItemCard from "../ItemCard/ItemCard";

export default function ItemList() {
  const content = appData.items
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(item => <ItemCard key={item.name} item={item} checkable={false} />);

    return (
      <>
        {content}
      </>
    );
}