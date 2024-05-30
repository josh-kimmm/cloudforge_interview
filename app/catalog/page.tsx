import AdminTable from '@/components/admin/table';
import { Metals_fetchAll } from 'app/api/_actions/metals';

export default async function MetalsPage() {
  const metals = await Metals_fetchAll();

  return (
    <main className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center mb-8">
        <h1 className="font-semibold text-lg md:text-2xl">Metals</h1>
      </div>
      <AdminTable rows={metals} type="catalog" />
    </main>
  );
}
