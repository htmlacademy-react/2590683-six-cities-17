type PremiumItemProps = {
  className: string;
};

export default function PremiumItem({ className }: PremiumItemProps) {
  return (
    <div className={className}>
      <span>Premium</span>
    </div>
  );
}
