'use client';
import { useState, useCallback, useEffect } from 'react';
import { QQuotes, IQuotes } from '@/types/prisma';
import { Button } from '../../ui';

type QuoteRowProps = {
  quote: QQuotes;
  editQuote: (quote: IQuotes) => Promise<QQuotes>;
};
const TableCellQuoteMessage = ({ quote, editQuote }: QuoteRowProps) => {
  const [quoteMessage, setQuoteMessage] = useState(quote.message);

  const saveMessage = useCallback(async () => {
    await editQuote({ ...quote, message: quoteMessage });
  }, [quoteMessage]);

  useEffect(() => {}, [quoteMessage]);

  return (
    <td className="p4 relative">
      <textarea
        className="h-48 w-96 md:table-cell resize-none"
        value={quoteMessage}
        onChange={(e) => setQuoteMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && e.ctrlKey) {
            e.preventDefault();
            saveMessage();
          }
        }}
      />
      <Button
        className="absolute right-10 bottom-1"
        variant="ghost"
        size="icon"
        onClick={() => setQuoteMessage(quote.message)}
      >
        ❌
      </Button>
      <Button
        className="absolute right-1 bottom-1"
        variant="ghost"
        size="icon"
        onClick={() => saveMessage()}
      >
        ✅
      </Button>
    </td>
  );
};

export default TableCellQuoteMessage;
