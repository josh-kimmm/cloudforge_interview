import db from '@/db';
import { IInventory, QInventory } from '@/types/prisma';
import { generateDbId } from '../../../lib/utils';

const InventoryModel = (inventory: any): IInventory => {
  const InventoryModel: IInventory = {
    id: inventory?.id || generateDbId('inv'),
    final_quantity: inventory?.final_quantity || 0,
    quote_quantity: inventory?.quote_quantity || 0,
    price: inventory?.price || 0
  };

  return InventoryModel;
};

const Inventory_upsert = async (inventory: IInventory): Promise<QInventory> => {
  const inventoryModel = InventoryModel(inventory);

  const updated_inventory = await db.inventory.upsert({
    create: inventoryModel,
    update: inventoryModel,
    where: {
      id: inventoryModel.id
    }
  });

  return updated_inventory;
};

export { Inventory_upsert, InventoryModel };
