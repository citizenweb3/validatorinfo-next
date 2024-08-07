import { FC, useState } from 'react';

import BaseModal from '@/components/common/modal/base-modal';
import PlusButton from '@/components/common/plus-button';

interface OwnProps {
  name: string;
  list: { value: number; title: string }[];
  selected?: number;
  onChange: (value: number) => void;
}

const ChooseDropdown: FC<OwnProps> = ({ name, list, selected, onChange }) => {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
  const selectedTitle =
    typeof selected !== 'undefined' ? list.find((item) => item.value === selected)?.title ?? '' : '';

  const handleChange = (value: number) => {
    setIsModalOpened(false);
    onChange(value);
  };
  return (
    <div className="flex h-8 flex-row items-center justify-between border-b border-bgSt pl-4 text-lg">
      <div className="h-8">{name}:</div>
      <div onClick={() => setIsModalOpened(true)} className="ml-4 h-8 min-w-24 cursor-pointer text-highlight">
        {selectedTitle}
      </div>
      <PlusButton isOpened={isModalOpened} onClick={() => setIsModalOpened(true)} />
      <BaseModal opened={isModalOpened} onClose={() => setIsModalOpened(false)} className="right-0 top-0">
        <div className="space-y-1 text-nowrap text-base">
          {list.map((item) => (
            <div
              key={item.value}
              onClick={() => handleChange(item.value)}
              className={`${item.value === selected ? 'text-highlight' : ''} cursor-pointer hover:text-highlight`}
            >
              {item.title}
            </div>
          ))}
        </div>
      </BaseModal>
    </div>
  );
};

export default ChooseDropdown;
