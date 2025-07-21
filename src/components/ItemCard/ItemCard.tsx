import { useEffect, useRef, useState } from "react";
import type { Item } from "../../models/item";
import { UserDataService } from "../../services/user-data-service";
import { UtilsService } from "../../services/utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronDown, faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";

import './ItemCard.scss'

type Props = {
  item: Item,
  checkable: boolean
};

export default function ItemCard({ item, checkable }: Props) {
  const initialCheckedState = checkable ? UserDataService.isItemObtained(item.name) : false;
  const [checked, setChecked] = useState(initialCheckedState);
  const [expanded, setExpanded] = useState(false);

  const collapseRef = useRef(null);
  const collapseId = UtilsService.convertStringToIdFormat(`${item.name}_collapse`);
  const checkboxId = UtilsService.convertStringToIdFormat(`${item.name}_checkbox`);

  const toggleChecked = () => {
    UserDataService.toggleObtainedItem(item.name);
    setChecked(UserDataService.isItemObtained(item.name));
  }

  useEffect(() => {
    const collapseEl = collapseRef.current;
    const handleShow = () => setExpanded(true);
    const handleHide = () => setExpanded(false);

    collapseEl.addEventListener('show.bs.collapse', handleShow);
    collapseEl.addEventListener('hide.bs.collapse', handleHide);

    return () => {
      collapseEl.removeEventListener('show.bs.collapse', handleShow);
      collapseEl.removeEventListener('hide.bs.collapse', handleHide);
    };
  }, []);

  const locationsList = item.locations.map(location =>
    <div key={`${item.name}|${location.requiredCardLevel}|${location.location}`} className="item-card-location">
      <span>Card Level {location.requiredCardLevel} - {location.location}</span>
    </div>
  );


  return (
    <div className="card item-card">
      <div>
        <div className="item-card-body">
          <div className="item-card-body-title">
            {checkable &&
              <input type='checkbox'
                className="item-card-checkbox"
                checked={checked}
                onChange={toggleChecked}
                id={checkboxId}
                name={checkboxId} />
            }
            <b style={{ padding: '8px', textDecorationLine: checked ? 'line-through' : 'none' }} >{item.name} - {item.type}</b>
          </div>
          <button className="btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${collapseId}`}
            aria-expanded={expanded}
            aria-controls={collapseId}>
            <FontAwesomeIcon icon={expanded ? faCircleChevronUp : faCircleChevronDown} />
          </button>
        </div>
        <div className="collapse" id={collapseId} ref={collapseRef}>
          <div className="card card-body">
            <b>Locations</b>
            <div className="item-card-locations">
              {locationsList}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
