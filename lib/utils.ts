import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { v4 as uuid } from 'uuid';
import {
  IMetals_Id_Prefix,
  IInventory_Id_Prefix,
  IQuotes_Id_Prefix
} from 'types/prisma';

type IAvailable_DB_Ids =
  | IMetals_Id_Prefix
  | IInventory_Id_Prefix
  | IQuotes_Id_Prefix;

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

const generateDbId = (prefix: IAvailable_DB_Ids) => {
  return `${prefix}_${uuid()}`;
};

export { cn, generateDbId };
