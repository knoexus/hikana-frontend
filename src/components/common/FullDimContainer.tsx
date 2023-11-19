import { TailwindComponentProps } from '@/types/TailwindComponentProps';

const FullDimContainer = ({
  extraClasses = '',
  children,
}: TailwindComponentProps) => (
  <div className={`w-full h-full ${extraClasses}`}>{children}</div>
);

export default FullDimContainer;
