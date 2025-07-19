import { useState } from "react";
import type { Item } from "../models/item";
import { UserDataService } from "../services/user-data-service";

type Props = {
  item: Item,
  checkable: boolean
};

export default function ListItem({ item, checkable }: Props) {
  const initialCheckedState = checkable ? UserDataService.isItemObtained(item.name) : false;
  const [checked, setChecked] = useState(initialCheckedState);
  const [expanded, setExpanded] = useState(false);

  const toggleChecked = () => {
    UserDataService.toggleObtainedItem(item.name);
    setChecked(UserDataService.isItemObtained(item.name));
  }

  const toggleExpanded = () => {
    setExpanded(!expanded);
  }

  const locationsList = item.locations.map(location =>
    <li key={`${item.name}|${location.requiredCardLevel}|${location.location}`} style={{ listStyleType: 'none', padding: '2px' }}>
      <span>Card Level {location.requiredCardLevel} - {location.location}</span>
    </li>
  );


  return (
    <div style={{ padding: '8px', border: '1px solid', margin: '8px' }}>
      {checkable &&
        <input type='checkbox' checked={checked} onChange={toggleChecked} id={item.name} name={item.name} />
      }
      <b style={{ padding: '8px', textDecorationLine: checked ? 'line-through' : 'none' }} >{item.name} - {item.type}</b>
      <input type='button' onClick={toggleExpanded} value={expanded ? 'Collapse' : 'Expand'} />
      {expanded &&
        <div>
          <ul style={{ marginBottom: '4px', marginTop: '4px' }}>
            {locationsList}
          </ul>
        </div>
      }
    </div>
  );
}
