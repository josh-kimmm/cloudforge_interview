import { TableHeader, TableRow, TableHead } from 'app/_components/ui';

export default function CatalogHeader() {
  return (
    <TableHeader>
      <TableRow>
        <TableHead className="max-w-[150px]">Id</TableHead>
        <TableHead className="hidden md:table-cell">Material</TableHead>
        <TableHead className="hidden md:table-cell">Shape</TableHead>
        <TableHead className="hidden md:table-cell">Grade</TableHead>
        <TableHead className="hidden md:table-cell">Finish</TableHead>
        <TableHead className="hidden md:table-cell">Dimensions</TableHead>
        <TableHead className="hidden md:table-cell">Created At</TableHead>
        <TableHead className="hidden md:table-cell">Updated At</TableHead>
      </TableRow>
    </TableHeader>
  );
}
