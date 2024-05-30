import db from '@/db';
import { IQuotes, QQuotes } from '@/types/prisma';
import { generateDbId } from '@/lib/utils';

const QuotesModel = (quote: any): IQuotes => {
  const QuotesModel: IQuotes = {
    id: quote?.id || generateDbId('qte'),
    client_email: quote?.client_email || '',
    cf_admin_email: quote?.cf_admin_email || '',
    prompt: quote?.prompt || '',
    message: quote?.message || '',
    finalized: quote?.finalized || false
  };
  return QuotesModel;
};

const Quotes_upsert = async (quote: IQuotes): Promise<QQuotes> => {
  'use server';
  try {
    const quoteModel = QuotesModel(quote);
    const updated_quote = await db.quotes.upsert({
      create: quoteModel,
      update: quoteModel,
      where: {
        id: quoteModel.id
      }
    });
    return updated_quote;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const Quotes_fetchAll = async (): Promise<Array<QQuotes>> => {
  'use server';
  try {
    const quotes = await db.quotes.findMany();

    return quotes;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { Quotes_upsert, QuotesModel, Quotes_fetchAll };
