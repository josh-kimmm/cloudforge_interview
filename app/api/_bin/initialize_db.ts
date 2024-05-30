import db from 'app/api/_db';

// controllers
import { Metals_upsert, MetalsModel } from 'app/api/_actions/metals';
import { Inventory_upsert, InventoryModel } from 'app/api/_actions/inventory';

// db seed data
import ALUMINUM from 'app/api/_db/seed-data/aluminum.json';
import BRASS from 'app/api/_db/seed-data/brass.json';
import COPPER from 'app/api/_db/seed-data/copper.json';
import STAINLESS_STEEL from 'app/api/_db/seed-data/stainless-steel.json';
import TITANIUM from 'app/api/_db/seed-data/titanium.json';

// types
import { QInventory, QMetals } from '@/types/prisma';

const init = async () => {
  try {
    const metals = [ALUMINUM, BRASS, COPPER, STAINLESS_STEEL, TITANIUM];
    for (const metal of metals) {
      const { metals: curr_metal } = metal;
      for (const metal_type of curr_metal) {
        const metalModel = MetalsModel({ ...metal_type, id: '' });
        const inventoryModel = InventoryModel({
          id: '',
          price: metal_type.price_per_unit * 100,
          final_quantity: metal_type.quantity_available,
          quote_quantity: metal_type.quantity_available
        });

        await db.$transaction(async () => {
          const updatedInventory: QInventory =
            await Inventory_upsert(inventoryModel);
          const updatedMetal: QMetals = await Metals_upsert({
            ...metalModel,
            inventory_id: updatedInventory.id
          });
          console.log(
            `Added metal ${updatedMetal.material} with quantity ${updatedInventory.final_quantity} and price ${updatedInventory.price}`
          );
        });
      }
    }

    return;
  } catch (error) {
    console.error('Unable to seed DB. Please try again.');
    console.error(error);
  }
};

init().then(() => console.log('\n\nDB Successfully seeded'));
