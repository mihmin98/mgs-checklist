const ItemTypeEnum = {
  ITEM: 'ITEM',
  WEAPON: 'WEAPON'
} as const satisfies Record<string, string>;

export type ItemType = (typeof ItemTypeEnum)[keyof typeof ItemTypeEnum];