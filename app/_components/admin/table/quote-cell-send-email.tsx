'use client';
import { useState, useCallback, useEffect } from 'react';
import { QQuotes, IQuotes } from '@/types/prisma';
import { Button } from '../../ui';
import { auth, isSignedOn } from '@/lib/auth';

type QuoteRowProps = {
  quote: QQuotes;
  editQuote: (quote: IQuotes) => Promise<QQuotes>;
};
const TableCellSendEmail = async ({ quote, editQuote }: QuoteRowProps) => {
  const session = await auth();
  const [showSendButton, setShowSendButton] = useState(!quote.finalized);

  const sendEmail = useCallback(async () => {
    await editQuote({
      ...quote,
      finalized: true,
      cf_admin_email: session?.user?.email || ''
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
