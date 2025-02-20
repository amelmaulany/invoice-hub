'use client';

import { Pagination as ArkUiPagination } from '@ark-ui/react';
import { faChevronLeft, faChevronRight } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type PageNumberProps = {
  pageNumber: number;
  onChange: (prop: number) => void;
  count: number;
  pageSize: number;
};

const PageNumber = ({ pageNumber, count, onChange, pageSize }: PageNumberProps) => {
  const style =
    'flex h-7 min-w-7 w-max px-1 data-[selected]:bg-cyan-950 data-[selected]:bg-opacity-75 data-[selected]:cursor-default data-[selected]:text-white items-center text-sm justify-center rounded-md text-cyan-700 hover:bg-cyan-950 hover:bg-opacity-50 hover:text-white disabled:text-neutral-400 disabled:hover:bg-transparent';
  return (
    <ArkUiPagination.Root
      onPageChange={({ page }) => onChange(page)}
      page={pageNumber}
      count={count}
      pageSize={pageSize}
      siblingCount={2}
      className="flex gap-2"
    >
      <ArkUiPagination.PrevTrigger className={style}>
        <FontAwesomeIcon icon={faChevronLeft} fixedWidth fontSize={14} />
      </ArkUiPagination.PrevTrigger>
      <ArkUiPagination.Context>
        {(pagination) =>
          pagination.pages.map((page, index) =>
            page.type === 'page' ? (
              <ArkUiPagination.Item className={style} key={index} {...page}>
                {page.value}
              </ArkUiPagination.Item>
            ) : (
              <ArkUiPagination.Ellipsis
                className="flex h-7 w-7 items-center justify-center text-cyan-700"
                key={index}
                index={index}
              >
                &#8230;
              </ArkUiPagination.Ellipsis>
            ),
          )
        }
      </ArkUiPagination.Context>
      <ArkUiPagination.NextTrigger className={style}>
        <FontAwesomeIcon icon={faChevronRight} fixedWidth fontSize={16} />
      </ArkUiPagination.NextTrigger>
    </ArkUiPagination.Root>
  );
};

export default PageNumber;
