'use client';
import { TableRow, TableCell } from 'app/_components/ui';
import { QQuotes, IQuotes } from '@/types/prisma';

import TableCellQuoteMessage from '@/components/admin/table/quote-cell-message';

import TableCellSendEmail from './quote-cell-send-email';

type QuoteRowProps = {
  quote: QQuotes;
  editQuote: (quote: IQuotes) => Promise<QQuotes>;
};
const QuoteRow = ({ quote, editQuote }: QuoteRowProps) => {
  return (
    <TableRow key={quote.id}>
      <TableCell className="font-medium">{quote.id}</TableCell>
      <TableCell className="hidden md:table-cell">
        {quote.client_email || '-'}
      </TableCell>
      <TableCell className="hidden md:table-cell">
        {quote.cf_admin_email || '-'}
      </TableCell>
      <TableCell className="hidden md:table-cell">{quote.prompt}</TableCell>
      <TableCellQuoteMessage quote={quote} editQuote={editQuote} />
      <TableCell className="hidden md:table-cell">
        {quote.finalized.toString()}
      </TableCell>
      <TableCell className="hidden md:table-cell">
        <TableCellSendEmail quote={quote} editQuote={editQuote} />
      </TableCell>
      <TableCell className="hidden md:table-cell">
        {quote.created_at.toString()}
      </TableCell>
      <TableCell className="hidden md:table-cell">
        {quote.updated_at.toString()}
      </TableCell>
    </TableRow>
  );
};

export default QuoteRow;
