import {
  Metals as PrismaMetals,
  Inventory as QInventory,
  Quotes as QQuotes
} from '@prisma/client';

declare global {
  namespace PrismaJson {
    type MetalDimensions = {
      length: string?;
      width: string?;
      thickness: string?;
      diameter: string?;
      [key: string]: string;
    };
  }
}

// Q = Queried models returned by Prisma. Both schema definition and queried models should both be the same type
type QMetals = PrismaMetals & {
  inventory: QInventory;
};
export { QMetals, QInventory, QQuotes };

export type IMetals = Omit<PrismaMetals, 'created_at' | 'updated_at'>;
export type IInventory = Omit<QInventory, 'created_at' | 'updated_at'>;
export type IQuotes = Omit<QQuotes, 'created_at' | 'updated_at'>;

export type IMetals_Id_Prefix = 'mtl';
export type IInventory_Id_Prefix = 'inv';
export type IQuotes_Id_Prefix = 'qte';
export type IAvailable_DB_Ids =
  | IMetals_Id_Prefix
  | IInventory_Id_Prefix
  | IQuotes_Id_Prefix;
