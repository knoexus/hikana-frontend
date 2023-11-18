import { TailwindComponentProps } from '@/types/TailwindComponentProps';

const Container = ({ extraClasses = '', children }: TailwindComponentProps) => (
  <div className={`container mx-auto ${extraClasses}`}>{children}</div>
);

export default Container;
