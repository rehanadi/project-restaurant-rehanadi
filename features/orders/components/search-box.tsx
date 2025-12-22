'use client';

import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBox = ({ value, onChange }: SearchBoxProps) => {
  return (
    <div className="bg-white max-w-149.5 w-full h-11 px-4 md:px-6 border border-neutral-300 rounded-full flex-start gap-1.5">
      <Search className="shrink-0 text-neutral-500 size-5" />
      <Input
        type="text"
        placeholder="Search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 p-0 border-0 outline-0 focus:outline-0 text-sm placeholder:text-neutral-600 shadow-none"
      />
    </div>
  );
};

export default SearchBox;