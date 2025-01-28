import { PREMIUM_ITEM_TITLE } from '../../consts';

type PremiumItemProps = {
  className: string;
};

export default function PremiumItem({ className }: PremiumItemProps) {
  return (
    <div className={className}>
      <span>{PREMIUM_ITEM_TITLE}</span>
    </div>
  );
}
