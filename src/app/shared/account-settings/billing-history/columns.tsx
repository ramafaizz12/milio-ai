'use client';

import { exportToCSV } from '@core/utils/export-to-csv';
import { createColumnHelper } from '@tanstack/react-table';
import dayjs from 'dayjs';
import Image from 'next/image';
import { PiCloudArrowDown } from 'react-icons/pi';
import { Badge, Button, Checkbox, Flex, Text, Title } from 'rizzui';
import { BillingHistoryDataType } from './table';

// Warna untuk status
const statusColors: any = {
  ACTIVE: 'success',
  CANCELED: 'secondary',
  'In Progress': 'info',
  'On hold': 'danger',
};

function handleDownloadRowData(row: { [key: string]: any }) {
  exportToCSV(
    [row],
    'ID,Duration,Start Date,End Date,Plan Name,Status',
    `billing_history_${row.id}`
  );
}

const columnHelper = createColumnHelper<BillingHistoryDataType>();

export const billingHistoryColumns = [
  // Kolom untuk seleksi baris
  // columnHelper.display({
  //   id: 'select',
  //   size: 50,
  //   // header: ({ table }) => (
  //   //   <Checkbox
  //   //     className="ps-3.5"
  //   //     aria-label="Select all rows"
  //   //     checked={table.getIsAllPageRowsSelected()}
  //   //     onChange={() => table.toggleAllPageRowsSelected()}
  //   //   />
  //   // ),
  //   // cell: ({ row }) => (
  //   //   <Checkbox
  //   //     className="ps-3.5"
  //   //     aria-label="Select row"
  //   //     checked={row.getIsSelected()}
  //   //     onChange={() => row.toggleSelected()}
  //   //   />
  //   // ),
  // }),
  // Kolom untuk nama paket
  columnHelper.display({
    id: 'plan',
    size: 250,
    header: 'Plan',
    cell: ({ row }) => (
      <Title as="h6" className="mb-0.5 !text-sm font-medium text-gray-700">
        {row.original.plans.name}
      </Title>
    ),
  }),
  // Kolom untuk durasi
  columnHelper.display({
    id: 'duration',
    size: 150,
    header: 'Duration',
    cell: ({ row }) => (
      <span className="text-gray-700">{row.original.duration || 'N/A'}</span>
    ),
  }),
  // Kolom untuk tanggal mulai
  columnHelper.display({
    id: 'start_date',
    size: 150,
    header: 'Start Date',
    cell: ({ row }) => (
      <Text className="mb-1 text-gray-700">
        {dayjs(row.original.start_date).format('DD MMM YYYY')}
      </Text>
    ),
  }),
  // Kolom untuk tanggal berakhir
  columnHelper.display({
    id: 'end_date',
    size: 150,
    header: 'End Date',
    cell: ({ row }) => (
      <Text className="mb-1 text-gray-700">
        {dayjs(row.original.end_date).format('DD MMM YYYY')}
      </Text>
    ),
  }),
  // Kolom untuk status
  columnHelper.accessor('status', {
    id: 'status',
    size: 180,
    header: 'Status',
    cell: ({ row }) => (
      <Badge
        variant="flat"
        rounded="pill"
        className="w-[90px] font-medium"
        color={statusColors[row.original.status] || 'secondary'}
      >
        {row.original.status}
      </Badge>
    ),
  }),
  // Kolom untuk aksi unduh data
  // columnHelper.display({
  //   id: 'action',
  //   size: 120,
  //   cell: ({ row }) => (
  //     <Button
  //       variant="text"
  //       onClick={() => handleDownloadRowData(row.original)}
  //     >
  //       <PiCloudArrowDown className="size-6 text-gray-500" />
  //     </Button>
  //   ),
  // }),
];
