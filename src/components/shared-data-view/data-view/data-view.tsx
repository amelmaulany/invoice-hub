'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useState, useEffect, useDeferredValue, JSX } from 'react';
import * as Table from '@/components/shared/table/table';
import PageNumber from '../page-number/page-number';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/pro-regular-svg-icons';

export type DataViewColumn<T> = {
  key: keyof T;
  label: string;
  cell?: (value: T[keyof T], row: T) => JSX.Element;
  cellSkeleton?: JSX.Element;
};

type DataViewProps<T> = {
  initialParameters: Promise<{ [key: string]: string | string[] | undefined }>;
  columns: DataViewColumn<T>[];
  pageSize?: number;
  queryFunction: (
    search: string,
    page: number,
    pageSize: number,
  ) => Promise<{ data: T[]; total: number }>;
};

const DataView = <T,>({
  initialParameters,
  columns,
  pageSize = 5,
  queryFunction,
}: DataViewProps<T>) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [data, setData] = useState<T[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSizeState, setPageSizeState] = useState(pageSize);
  const [loading, setLoading] = useState(false);

  const deferredSearchQuery = useDeferredValue(searchQuery);

  useEffect(() => {
    initialParameters.then((params) => {
      setSearchQuery((params.search as string) || '');
      setPage(parseInt(params.page as string, 10) || 1);
    });
  }, [initialParameters]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await queryFunction(deferredSearchQuery, page, pageSizeState);
      setData(result.data);
      setTotalPages(Math.max(1, Math.ceil(result.total / pageSizeState)));
      setLoading(false);
    };
    fetchData();
  }, [deferredSearchQuery, page, pageSizeState, queryFunction]);

  const updateUrlParams = (newParams: Record<string, string>) => {
    const params = new URLSearchParams(searchParams);
    Object.entries(newParams).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-col gap-4 p-[30px]">
      <div className="flex justify-end">
        <div className="flex w-fit min-w-9 items-center gap-3 rounded-md border border-neutral-200 px-3 py-1">
          <FontAwesomeIcon icon={faMagnifyingGlass} fixedWidth fontSize={14} />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setPage(1);
              updateUrlParams({ search: e.target.value, page: '1' });
            }}
          />
        </div>
      </div>

      <Table.Root>
        <Table.Head>
          <tr>
            {columns.map((col) => (
              <Table.Th key={String(col.key)}>{col.label}</Table.Th>
            ))}
          </tr>
        </Table.Head>
        <Table.Body>
          {loading
            ? Array.from({ length: pageSizeState }).map((_, i) => (
                <Table.Tr key={i}>
                  {columns.map((col) => col.cellSkeleton || <td key={i}>...</td>)}
                </Table.Tr>
              ))
            : data.map((row, rowIndex) => (
                <Table.Tr key={rowIndex}>
                  {columns.map((col) =>
                    col.cell ? (
                      col.cell(row[col.key], row)
                    ) : (
                      <td key={String(col.key)}>{String(row[col.key])} </td>
                    ),
                  )}
                </Table.Tr>
              ))}
        </Table.Body>
      </Table.Root>

      <div className="flex w-full items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          View
          <select
            onChange={(e) => {
              setPageSizeState(Number(e.target.value));
              setPage(1);
              updateUrlParams({ pageSize: e.target.value, page: '1' });
            }}
            className="w-fit"
            value={pageSizeState}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
          of {totalPages}
        </div>

        <PageNumber count={totalPages} onChange={setPage} pageNumber={page} pageSize={pageSize} />
      </div>
    </div>
  );
};

export default DataView;
