import { TailwindComponentProps } from '@/types/TailwindComponentProps';

const Title = ({ extraClasses = '', children }: TailwindComponentProps) => (
  <h1 className={`text-3xl mb-4 ${extraClasses}`}>{children}</h1>
);

export default Title;
