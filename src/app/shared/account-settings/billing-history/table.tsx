'use client';

import { billingHistoryData } from '@/data/billing-history';
import Table from '@core/components/table';
import { useEffect } from 'react';
import { useSubcription } from '@/app/api/plan/useSubcription';
import { useTanStackTable } from '@core/components/table/custom/use-TanStack-Table';
import TableFooter from '@core/components/table/footer';
import TablePagination from '@core/components/table/pagination';
import { billingHistoryColumns } from './columns';

export type BillingHistoryDataType = (typeof billingHistoryData)[number];

export default function BillingHistoryTable({
  className,
}: {
  className?: string;
}) {
  const { data, isLoading } = useSubcription();
  const { table, setData } = useTanStackTable<BillingHistoryDataType>({
    tableData: data || [],
    columnConfig: billingHistoryColumns,
    options: {
      initialState: {
        pagination: {
          pageIndex: 0,
          pageSize: 10,
        },
      },
      meta: {
        handleDeleteRow: (row) => {
          setData((prev) => prev.filter((r) => r.id !== row.id));
          table.resetRowSelection();
        },
        handleMultipleDelete: (rows) => {
          setData((prev) => prev.filter((r) => !rows.includes(r)));
          table.resetRowSelection();
        },
      },
      enableColumnResizing: false,
    },
  });
  useEffect(() => {}, []);
  return (
    <div className={className}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Table table={table} variant="modern" />
          <TableFooter table={table} />
          <TablePagination table={table} className="mt-4" />
        </>
      )}
    </div>
  );
}
