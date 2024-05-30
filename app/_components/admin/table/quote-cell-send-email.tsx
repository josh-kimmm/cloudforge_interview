'use client';
import { useState, useCallback } from 'react';
import { QQuotes, IQuotes } from '@/types/prisma';
import { Button } from '../../ui';
import { useSession } from 'next-auth/react';

type QuoteRowProps = {
  quote: QQuotes;
  editQuote: (quote: IQuotes) => Promise<QQuotes>;
};
const TableCellSendEmail = ({ quote, editQuote }: QuoteRowProps) => {
  const session = useSession();
  const [showSendButton, setShowSendButton] = useState(!quote?.finalized);

  const sendEmail = useCallback(async () => {
    await editQuote({
      ...quote,
      finalized: true,
      cf_admin_email: session?.data?.user?.email || ''
    });
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
