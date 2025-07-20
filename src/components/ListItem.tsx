import { useState } from "react";
import type { Item } from "../models/item";
import { UserDataService } from "../services/user-data-service";
import { UtilsService } from "../services/utils";

type Props = {
  item: Item,
  checkable: boolean
};

export default function ListItem({ item, checkable }: Props) {
  const initialCheckedState = checkable ? UserDataService.isItemObtained(item.name) : false;
  const [checked, setChecked] = useState(initialCheckedState);
  const [expanded, setExpanded] = useState(false);

  const collapseId = UtilsService.convertStringToIdFormat(`${item.name}_collapse`);
  const checkboxId = UtilsService.convertStringToIdFormat(`${item.name}_checkbox`);

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
    <div style={{ padding: '8px', margin: '8px' }} className="card">
      <div>
        {checkable &&
          <input type='checkbox' checked={checked} onChange={toggleChecked} id={checkboxId} name={checkboxId} />
        }
        <b style={{ padding: '8px', textDecorationLine: checked ? 'line-through' : 'none' }} >{item.name} - {item.type}</b>
        <button className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${collapseId}`}
          aria-expanded="false"
          aria-controls="collapseExample">
          Toggle Button
        </button>
        <div className="collapse" id={collapseId}>
          <div className="card card-body">
            <b>Locations</b>
            <ul style={{ marginBottom: '4px', marginTop: '4px' }}>
              {locationsList}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
