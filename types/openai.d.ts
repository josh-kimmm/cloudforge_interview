import { QMetals, IQuotes } from './prisma';

export type IAI_Quote_Fetch = Omit<
  QMetals,
  'id' | 'created_at' | 'updated_at' | 'inventory_id'
> & {
  metadata: {
    prompt: string;
    client_email: string;
  };
  quantity_requested: number;
};

export type IAI_Quote_Create = {
  metadata: { prompt: string; client_email: string };
  message: string;
};
