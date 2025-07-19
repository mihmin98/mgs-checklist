import { itemData } from "../data/data";
import ListItem from "./ListItem";

export default function ProgressionList() {
  const progressionItems = itemData.filter(item => item.requiredForProgression === true);
  const cardLevels = [...new Set(progressionItems.map(item => item.minimumLevel()))].sort((a, b) => a - b);

  const content = cardLevels.map(cardLevel => {
    const itemsForCardLevel = progressionItems.filter(item => item.minimumLevel() === cardLevel);

    const itemList = itemsForCardLevel.map(item =>
      <ListItem key={item.name} item={item} checkable={true} />
    );

    return (
      <div key={cardLevel} style={{ margin: '16px' }}>
        <h2>Card Level {cardLevel}</h2>
        <div>
          {itemList}
        </div>
      </div>
    )
  });

  return (
    <>
      {content}
    </>
  );
}