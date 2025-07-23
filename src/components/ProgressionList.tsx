import { appData } from "../data/data";
import { UtilsService } from "../services/utils";
import ItemCard from "./ItemCard/ItemCard";

export default function ProgressionList() {
  const progressionItems = appData.items.filter(item => item.requiredForProgression === true);
  const cardLevels = [...new Set(progressionItems.map(item => item.minimumLevel))].sort((a, b) => a - b);

  const content = cardLevels.map(cardLevel => {
    const itemsForCardLevel = progressionItems.filter(item => item.minimumLevel === cardLevel);

    const itemList = itemsForCardLevel.map(item =>
      <ItemCard key={item.name} item={item} checkable={true} />
    );

    return (
      <div key={cardLevel} style={{ marginBottom: '2em', backgroundColor: 'lightgrey' }} className="card">
        <h2>{UtilsService.getCardLevelStr(cardLevel)}</h2>
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