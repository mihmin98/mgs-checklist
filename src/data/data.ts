import { Item, type ItemDataJSON } from "../models/item";

const itemDataJSON: ItemDataJSON[] = [
  {
    name: 'SOCOM',
    type: 'WEAPON',
    requiredForProgression: true,
    locations: [
      {
        location: 'Heliport - Truck',
        requiredCardLevel: 0
      },
      {
        location: 'Tank Hangar B2 Armory - Bottom Middle Room',
        requiredCardLevel: 0
      },
      {
        location: 'Tank Hangar B1 Holding Facility - Lobby (Holding Facility Battle)',
        requiredCardLevel: 1
      },
      {
        location: 'Tank Hangar 2F - Left Bottom Room',
        requiredCardLevel: 4
      },
    ]
  },
  {
    name: 'FA-MAS',
    type: 'WEAPON',
    requiredForProgression: true,
    locations: [
      {
        location: 'Nuclear Warhead Storage Building B2',
        requiredCardLevel: 1
      },
      {
        location: 'Tank Hangar B2 Armory - Bottom Right Room',
        requiredCardLevel: 2
      },
      {
        location: 'Nuclear Warhead Storage Building B1',
        requiredCardLevel: 5
      },
      {
        location: 'Cave',
        requiredCardLevel: 5
      },
    ]
  },
  {
    name: 'PSG-1',
    type: 'WEAPON',
    requiredForProgression: true,
    locations: [
      {
        location: 'Tank Hangar B2 Armory - Top Left Room',
        requiredCardLevel: 5
      },
    ]
  },
  {
    name: 'Nikita',
    type: 'WEAPON',
    requiredForProgression: true,
    locations: [
      {
        location: 'Tank Hangar B2 Armory - Top Right Room',
        requiredCardLevel: 3
      },
      {
        location: 'Nuclear Warhead Storage Building B1',
        requiredCardLevel: 3
      },
    ]
  },
  {
    name: 'Stinger',
    type: 'WEAPON',
    requiredForProgression: true,
    locations: [
      {
        location: 'Communication Tower Connecting Bridge',
        requiredCardLevel: 6
      },
    ]
  },
  {
    name: 'Grenade',
    type: 'WEAPON',
    locations: [
      {
        location: 'Tank Hangar B2 Armory - Bottom Left Room',
        requiredCardLevel: 1
      },
      {
        location: 'Canyon',
        requiredCardLevel: 2
      },
      {
        location: 'Nuclear Warhead Storage Building 1F',
        requiredCardLevel: 3
      },
      {
        location: 'Nuclear Warhead Storage Building B2',
        requiredCardLevel: 3
      },
      {
        location: 'Communication Tower B 9F',
        requiredCardLevel: 6
      },
      {
        location: 'Snow Field - Right Bottom Room',
        requiredCardLevel: 6
      },
    ]
  },
  {
    name: 'Stun Grenade',
    type: 'WEAPON',
    locations: [
      {
        location: 'Heliport - Left Room',
        requiredCardLevel: 0
      },
      {
        location: 'Tank Hangar B2 Armory - Bottom Right Room',
        requiredCardLevel: 1
      },
      {
        location: 'Nuclear Warhead Storage Building B1',
        requiredCardLevel: 3
      },
      {
        location: 'Nuclear Warhead Storage Building B2',
        requiredCardLevel: 4
      },
      {
        location: 'Tank Hangar B2 - Armory South',
        requiredCardLevel: 6
      },
      {
        location: 'Communication Tower A B2',
        requiredCardLevel: 6
      },
      {
        location: 'Snow Field - Top Right Room',
        requiredCardLevel: 6
      },
      {
        location: 'Blast Furnace 3F',
        requiredCardLevel: 6
      },
      {
        location: 'Blast Furnace 1F',
        requiredCardLevel: 6
      },
      {
        location: 'Underground Cargo Passage (Metal Gear Battle)',
        requiredCardLevel: 7
      },
    ]
  },
  {
    name: 'Chaff Grenade',
    type: 'WEAPON',
    locations: [
      {
        location: 'Heliport',
        requiredCardLevel: 0
      },
      {
        location: 'Tank Hangar 2F',
        requiredCardLevel: 0
      },
      {
        location: 'Tank Hangar 2F - Left Room',
        requiredCardLevel: 1
      },
      {
        location: 'Tank Hangar B1 Holding Facility - Right Cell',
        requiredCardLevel: 1
      },
      {
        location: 'Tank Hangar B2 Armory - Top Left Wall Room',
        requiredCardLevel: 1
      },
      {
        location: 'Canyon',
        requiredCardLevel: 2
      },
      {
        location: 'Nuclear Warhead Storage Building 1F',
        requiredCardLevel: 3
      },
      {
        location: 'Nuclear Warhead Storage Building B2',
        requiredCardLevel: 3
      },
      {
        location: 'Nuclear Warhead Storage Building B2 - Computer Room (Ninja Battle)',
        requiredCardLevel: 3
      },
      {
        location: 'Tank Hangar B2 - Armory South',
        requiredCardLevel: 6
      },
      {
        location: 'Communication Tower B 1F',
        requiredCardLevel: 6
      },
      {
        location: 'Communication Tower B 27F',
        requiredCardLevel: 6
      },
      {
        location: 'Snow Field - Right Bottom Room',
        requiredCardLevel: 6
      },
      {
        location: 'Blast Furnace 1F',
        requiredCardLevel: 6
      },
      {
        location: 'Underground Warehouse North',
        requiredCardLevel: 7
      },
      {
        location: 'Underground Base 1F',
        requiredCardLevel: 7
      },
      {
        location: 'Underground Base 2F',
        requiredCardLevel: 7
      },
      {
        location: 'Underground Base 3F',
        requiredCardLevel: 7
      },
      {
        location: 'Underground Cargo Passage (Metal Gear Battle)',
        requiredCardLevel: 7
      },
    ]
  },
  {
    name: 'Claymore',
    type: 'WEAPON',
    locations: [
      {
        location: 'Canyon',
        requiredCardLevel: 2
      },
      {
        location: 'Snow Field - Top Right Room',
        requiredCardLevel: 6
      },
      {
        location: 'Cargo Lift - Mid Point',
        requiredCardLevel: 6
      },
    ]
  },
  {
    name: 'C4',
    type: 'WEAPON',
    locations: [
      {
        location: 'Tank Hangar B2 - Armory South',
        requiredCardLevel: 1
      },
      {
        location: 'Tank Hangar B2 Armory - Top Middle Room',
        requiredCardLevel: 1
      },
      {
        location: 'Tank Hangar B2 Armory - Top Right Wall Room',
        requiredCardLevel: 1
      },
      {
        location: 'Nuclear Warhead Storage Building B2',
        requiredCardLevel: 3
      },
      {
        location: 'Communication Tower Connecting Bridge',
        requiredCardLevel: 6
      },
      {
        location: 'Blast Furnace 2F',
        requiredCardLevel: 6
      },
      {
        location: 'Cargo Lift - Bottom',
        requiredCardLevel: 6
      },
      {
        location: 'Underground Warehouse',
        requiredCardLevel: 6
      },
    ]
  },
  {
    name: 'Ration',
    type: 'ITEM',
    locations: [
      {
        location: 'Loading Dock',
        requiredCardLevel: 0
      },
      {
        location: 'Heliport',
        requiredCardLevel: 0
      },
      {
        location: 'Tank Hangar 1F Duct',
        requiredCardLevel: 0
      },
      {
        location: 'Tank Hangar 2F Duct',
        requiredCardLevel: 0
      },
      {
        location: 'Tank Hangar B1 Holding Facility - Duct',
        requiredCardLevel: 0
      },
      {
        location: 'Tank Hangar B1 Holding Facility - Left Cell',
        requiredCardLevel: 1
      },
      {
        location: 'Tank Hangar B2 - Armory South',
        requiredCardLevel: 1
      },
      {
        location: 'Tank Hangar 2F - Right Top Room',
        requiredCardLevel: 2
      },
      {
        location: 'Canyon',
        requiredCardLevel: 2
      },
      {
        location: 'Nuclear Warhead Storage Building 2F',
        requiredCardLevel: 3
      },
      {
        location: 'Nuclear Warhead Storage Building B2',
        requiredCardLevel: 3
      },
      {
        location: 'Nuclear Warhead Storage Building B2 - Computer Room (Ninja Battle)',
        requiredCardLevel: 3
      },
      {
        location: 'Nuclear Warhead Storage Building B1',
        requiredCardLevel: 4
      },
      {
        location: 'Nuclear Warhead Storage Building B1 - Office (Mantis Battle)',
        requiredCardLevel: 5
      },
      {
        location: 'Cave',
        requiredCardLevel: 5
      },
      {
        location: 'Underground Passage',
        requiredCardLevel: 5
      },
      {
        location: 'Communication Tower A B3',
        requiredCardLevel: 6
      },
      {
        location: 'Communication Tower A 9F',
        requiredCardLevel: 6
      },
      {
        location: 'Communication Tower A 27F',
        requiredCardLevel: 6
      },
      {
        location: 'Communication Tower A Wall',
        requiredCardLevel: 6
      },
      {
        location: 'Communication Tower Connecting Bridge',
        requiredCardLevel: 6
      },
      {
        location: 'Communication Tower B 10F',
        requiredCardLevel: 6
      },
      {
        location: 'Communication Tower B 27F',
        requiredCardLevel: 6
      },
      {
        location: 'Communication Tower A Roof',
        requiredCardLevel: 6
      },
      {
        location: 'Communication Tower B 1F',
        requiredCardLevel: 6
      },
      {
        location: 'Snow Field - Top Right Room',
        requiredCardLevel: 6
      },
      {
        location: 'Snow Field - Left Top Room',
        requiredCardLevel: 6
      },
      {
        location: 'Blast Furnace 1F',
        requiredCardLevel: 6
      },
      {
        location: 'Cargo Lift - Mid Point',
        requiredCardLevel: 6
      },
      {
        location: 'Cargo Lift - Bottom',
        requiredCardLevel: 6
      },
      {
        location: 'Underground Warehouse',
        requiredCardLevel: 6
      },
      {
        location: 'Underground Warehouse North',
        requiredCardLevel: 7
      },
      {
        location: 'Underground Base 1F',
        requiredCardLevel: 7
      },
      {
        location: 'Underground Base 3F - Commander Room',
        requiredCardLevel: 7
      },
      {
        location: 'Underground Cargo Passage (Metal Gear Battle)',
        requiredCardLevel: 7
      },
      {
        location: 'Parking Garage',
        requiredCardLevel: 7
      },
    ]
  },
  {
    name: 'Thermal Goggles',
    type: 'ITEM',
    requiredForProgression: true,
    locations: [
      {
        location: 'Tank Hangar 2F - Right Bottom Room',
        requiredCardLevel: 0
      },
      {
        location: 'Nuclear Warhead Storage Building B2',
        requiredCardLevel: 6
      },
    ]
  },
  {
    name: 'Night Vision Goggles',
    type: 'ITEM',
    requiredForProgression: true,
    locations: [
      {
        location: 'Nuclear Warhead Storage Building B2',
        requiredCardLevel: 4
      },
      {
        location: 'Nuclear Warhead Storage Building B1',
        requiredCardLevel: 5
      },
    ]
  },
  {
    name: 'Cardboard Box A',
    type: 'ITEM',
    requiredForProgression: true,
    locations: [
      {
        location: 'Tank Hangar 2F - Left Room',
        requiredCardLevel: 1
      },
    ]
  },
  {
    name: 'Cardboard Box B',
    type: 'ITEM',
    requiredForProgression: true,
    locations: [
      {
        location: 'Nuclear Warhead Storage Building B1',
        requiredCardLevel: 4
      },
    ]
  },
  {
    name: 'Cardboard Box C',
    type: 'ITEM',
    requiredForProgression: true,
    locations: [
      {
        location: 'Snow Field - Left Top Room',
        requiredCardLevel: 6
      },
    ]
  },
  {
    name: 'Mine Detector',
    type: 'ITEM',
    requiredForProgression: true,
    locations: [
      {
        location: 'Tank Hangar 2F - Right Top Room',
        requiredCardLevel: 2
      },
      {
        location: 'Underground Warehouse North',
        requiredCardLevel: 7
      },
      {
        location: 'Underground Base 3F',
        requiredCardLevel: 7
      },
    ]
  },
  {
    name: 'Gas Mask',
    type: 'ITEM',
    requiredForProgression: true,
    locations: [
      {
        location: 'Nuclear Warhead Storage Building B2',
        requiredCardLevel: 3
      },
    ]
  },
  {
    name: 'Body Armor',
    type: 'ITEM',
    requiredForProgression: true,
    locations: [
      {
        location: 'Nuclear Warhead Storage Building B2',
        requiredCardLevel: 6
      },
      {
        location: 'Blast Furnace 1F',
        requiredCardLevel: 6
      },
    ]
  },
  {
    name: 'Diazepam',
    type: 'ITEM',
    locations: [
      {
        location: 'Nuclear Warhead Storage Building B1',
        requiredCardLevel: 5
      },
      {
        location: 'Cave',
        requiredCardLevel: 5
      },
      {
        location: 'Snow Field',
        requiredCardLevel: 6
      },
      {
        location: 'Snow Field - Top Right Room',
        requiredCardLevel: 6
      },
    ]
  },
  {
    name: 'Medicine',
    type: 'ITEM',
    requiredForProgression: true,
    locations: [
      {
        location: 'Nuclear Warhead Storage Building B1',
        requiredCardLevel: 6
      },
    ]
  },
  {
    name: 'Rope',
    type: 'ITEM',
    requiredForProgression: true,
    locations: [
      {
        location: 'Communication Tower A B3',
        requiredCardLevel: 6
      },
    ]
  },
  {
    name: 'Suppressor',
    type: 'ITEM',
    requiredForProgression: true,
    locations: [
      {
        location: 'Tank Hangar 1F - Right Room',
        requiredCardLevel: 2
      },
    ]
  },
  {
    name: 'Camera',
    type: 'ITEM',
    requiredForProgression: true,
    locations: [
      {
        location: 'Tank Hangar B2 - Armory South',
        requiredCardLevel: 2
      },
    ]
  },
];

export const itemData: Item[] = itemDataJSON.map(itemJSON => Item.fromJSON(itemJSON));
