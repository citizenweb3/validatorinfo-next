'use client';

import { FC, useEffect, useMemo, useState } from 'react';

import { getChains } from '@/actions/chains';
import ChooseDropdown from '@/app/staking_calculator/choose-dropdown';
import { ChainItem } from '@/types';

interface OwnProps {
  value?: number;
  onChange: (value?: ChainItem) => void;
}

const ChooseValidator: FC<OwnProps> = ({ value, onChange }) => {
  const [chains, setChains] = useState<ChainItem[]>([]);
  useEffect(() => {
    const init = async () => {
      const chs = await getChains();
      setChains(chs);
    };
    init();
  }, []);

  const validatorList = useMemo(() => {
    return chains.map((v) => ({ value: v.id, title: v.name }));
  }, [chains]);

  return (
    <ChooseDropdown
      name="Choose a Network"
      list={validatorList}
      selected={value}
      onChange={(value) => onChange(chains.find((v) => v.id === value))}
    />
  );
};

export default ChooseValidator;
