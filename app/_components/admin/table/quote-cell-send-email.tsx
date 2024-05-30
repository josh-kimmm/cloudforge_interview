'use client';
import { useState, useCallback, useEffect } from 'react';
import { QQuotes, IQuotes } from '@/types/prisma';
import { Button } from '../../ui';

type QuoteRowProps = {
  quote: QQuotes;
  editQuote: (quote: IQuotes) => Promise<QQuotes>;
};
const TableCellSendEmail = ({ quote, editQuote }: QuoteRowProps) => {
  const [showSendButton, setShowSendButton] = useState(!quote.finalized);

  const sendEmail = useCallback(async () => {
    await editQuote({ ...quote, finalized: true });
    setShowSendButton(false);
  }, []);

  return showSendButton ? (
    <Button variant="outline" onClick={() => sendEmail()}>
      📧
    </Button>
  ) : (
    '-'
  );
};

export default TableCellSendEmail;
