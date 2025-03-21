'use client'

type PageSizeProps = {
    onChange: (e: number) => void;
    value: number;
    totalPages: number
}

const PageSize = ({onChange, value, totalPages}: PageSizeProps) => {
    const textStyle = "text-md text-neutral-700"

    return (
        <div className="flex items-center gap-2">
          <span className={textStyle}>View</span>
          <select
            onChange={(e) => onChange(Number(e.target.value))}
            className="w-fit"
            value={value}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
          <span className={textStyle}>of {totalPages}</span>
        </div>
    )
}

export default PageSize