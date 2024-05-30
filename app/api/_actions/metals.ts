import db from '@/db';
import { IMetals, QMetals } from '@/types/prisma';
import { IAI_Quote_Fetch } from '@/types/openai';
import { generateDbId } from '@/lib/utils';

const MetalsModel = (metal: any): IMetals => {
  const metalsModel: IMetals = {
    id: metal?.id || generateDbId('mtl'),
    material: metal?.material || '',
    shape: metal?.shape || '',
    grade: metal?.grade || '',
    finish: metal?.finish || '',
    dimensions: metal?.dimensions || '',
    inventory_id: metal?.inventory_id || ''
  };
  return metalsModel;
};

const Metals_upsert = async (metal: IMetals): Promise<QMetals> => {
  try {
    const metalModel = MetalsModel(metal);
    const updated_metal = await db.metals.upsert({
      create: metalModel,
      update: metalModel,
      where: {
        id: metalModel.id
      }
    });
    return updated_metal;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const Metals_fetchAll = async (): Promise<Array<QMetals>> => {
  'use server';

  const metals = await db.metals.findMany({
    include: {
      inventory: true
    }
  });

  return metals;
};

const Metals_fetch = async ({
  material,
  grade,
  shape,
  finish,
  dimensions
}: IAI_Quote_Fetch) => {
  try {
    const metals = await db.metals.findMany({
      where: {
        material,
        grade,
        shape,
        finish,
        dimensions: dimensions && {
          equals: dimensions
        }
      },
      include: {
        inventory: true
      }
    });

    return metals;
  } catch (error) {
    console.error('Error in Metals_fetch: ', error);
  }
};

export { Metals_upsert, MetalsModel, Metals_fetchAll, Metals_fetch };
