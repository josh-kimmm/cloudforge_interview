import { TableHeader, TableRow, TableHead } from 'app/_components/ui';

export default function QuoteHeader() {
  return (
    <TableHeader>
      <TableRow>
        <TableHead className="max-w-[150px]">Id</TableHead>
        <TableHead className="hidden md:table-cell">Client Email</TableHead>
        <TableHead className="hidden md:table-cell">Admin Email</TableHead>
        <TableHead className="hidden md:table-cell">Client Message</TableHead>
        <TableHead className="hidden md:table-cell">Quote Message</TableHead>
        <TableHead className="hidden md:table-cell">Email Sent</TableHead>
        <TableHead className="hidden md:table-cell">Send Email</TableHead>
        <TableHead className="hidden md:table-cell">Created At</TableHead>
        <TableHead className="hidden md:table-cell">Updated At</TableHead>
      </TableRow>
    </TableHeader>
  );
}
