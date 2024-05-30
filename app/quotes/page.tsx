import AdminTable from '@/components/admin/table';
import { Quotes_fetchAll, Quotes_upsert } from '@/actions/quotes';

export default async function QuotesPage() {
  const quotes = (await Quotes_fetchAll()).sort(
    (a, b) => b.updated_at.getTime() - a.updated_at.getTime()
  );

  return (
    <main className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center mb-8">
        <h1 className="font-semibold text-lg md:text-2xl">Quotes</h1>
      </div>
      <AdminTable rows={quotes} type="quote" editQuote={Quotes_upsert} />
    </main>
  );
}
