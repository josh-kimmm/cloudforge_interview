'use client';
import { TableBody, Table } from 'app/_components/ui/table';

import QuoteHeader from '@/components/admin/table/quote-header';
import CatalogHeader from '@/components/admin/table/catalog-header';
import MetalRow from '@/components/admin/table/metal-row';
import QuoteRow from '@/components/admin/table/quote-row';

import { QMetals, IQuotes, QQuotes } from '@/types/prisma';
import { FormEventHandler, useCallback, useState } from 'react';

const ALL_QUOTES_FILTER = 'ALL QUOTES FILTER';
const DRAFT_QUOTES_FILTER = 'DRAFT QUOTES FILTER';
const FINAL_QUOTES_FILTER = 'FINAL QUOTES FILTER';

type PropType_AdminTable_Metals = {
  rows: QMetals[];
  type: 'catalog';
};

type PropType_AdminTable_Quotes = {
  rows: QQuotes[];
  type: 'quote';
  editQuote: (quote: IQuotes) => Promise<QQuotes>;
};
const AdminTable = (
  props: PropType_AdminTable_Metals | PropType_AdminTable_Quotes
) => {
  const { rows, type } = props;
  const [quotesFilter, setQuotesFilter] = useState(ALL_QUOTES_FILTER);
  const Rows = rows
    .map((row) => {
      if (type === 'quote')
        return (
          <QuoteRow
            key={row.id}
            quote={row as QQuotes}
            editQuote={props.editQuote}
          />
        );
      if (type === 'catalog')
        return <MetalRow key={row.id} metal={row as QMetals} />;

      return null;
    })
    .filter(Boolean);

  const FilteredRows = useCallback(() => {
    return Rows.filter((row) => {
      if (quotesFilter === ALL_QUOTES_FILTER) {
        return row;
      }

      if (quotesFilter === DRAFT_QUOTES_FILTER && !row?.props.quote.finalized) {
        return row;
      }

      if (quotesFilter === FINAL_QUOTES_FILTER && row?.props.quote.finalized) {
        return row;
      }

      return null;
    }).filter(Boolean);
  }, [quotesFilter]);

  return (
    <>
      {type === 'quote' && (
        <form
          className="flex"
          onChange={(e) => {
            const target = e.target as HTMLInputElement;
            setQuotesFilter(target.value);
          }}
        >
          <span>Filter by:</span>
          <input
            className="ml-4 mr-2"
            type="radio"
            value={ALL_QUOTES_FILTER}
            defaultChecked={quotesFilter === ALL_QUOTES_FILTER}
            name="quote_filter"
          />
          All Quotes
          <input
            className="ml-4 mr-2"
            type="radio"
            value={DRAFT_QUOTES_FILTER}
            name="quote_filter"
            defaultChecked={quotesFilter === DRAFT_QUOTES_FILTER}
          />{' '}
          Draft Quotes
          <input
            className="ml-4 mr-2"
            type="radio"
            value={FINAL_QUOTES_FILTER}
            defaultChecked={quotesFilter === FINAL_QUOTES_FILTER}
            name="quote_filter"
          />
          Sent Quotes
        </form>
      )}
      <form className="border shadow-sm rounded-lg">
        <Table>
          {type === 'quote' && <QuoteHeader />}
          {type === 'catalog' && <CatalogHeader />}
          <TableBody>{FilteredRows()}</TableBody>
        </Table>
      </form>
    </>
  );
};

export default AdminTable;
