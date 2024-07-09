import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface OwnProps {
  icon?: string;
  name: string;
  id: number;
}

const ValidatorListItemAvatar: FC<OwnProps> = ({ icon, name, id }) => {
  return (
    <Link href={`/validators/${id}`} className="flex flex-col items-center justify-center">
      <div className="h-10 w-10 rounded-full bg-white">
        {icon && <Image src={icon} alt={name} width={40} height={40} className="h-10 w-10 rounded-full" />}
      </div>
      <div className="text-nowrap text-center text-sm">{name}</div>
    </Link>
  );
};

export default ValidatorListItemAvatar;
