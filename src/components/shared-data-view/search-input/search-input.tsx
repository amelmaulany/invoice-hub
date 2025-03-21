'use client'

import { faMagnifyingGlass } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SearchInputProps = {
    value: string;
    onChange: (e: string) => void;
}

const SearchInput = ({onChange, value}: SearchInputProps) => {
    return (
        <div className="flex w-fit min-w-9 bg-white items-center gap-3 rounded-md px-4 py-2">
            <FontAwesomeIcon icon={faMagnifyingGlass} fixedWidth fontSize={14} className="text-neutral-500" />
            <input
                type="text"
                placeholder="Search..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="placeholder:text-neutral-300"
            />
        </div>
    )
}

export default SearchInput