import { FC } from 'react';

interface OwnProps {
  prefix?: string;
  text: string;
}

const PageTitle: FC<OwnProps> = ({ prefix, text }) => {
  return (
    <h1 className="flex w-fit border-b border-bgSt px-4 text-2xl text-highlight">
      <span className="mr-3 text-white">{prefix}</span>
      {text}
    </h1>
  );
};

export default PageTitle;
