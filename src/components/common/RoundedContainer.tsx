import Container from './Container';
import { TailwindComponentProps } from '@/types/TailwindComponentProps';

const RoundedContainer = ({
  extraClasses = '',
  children,
}: TailwindComponentProps) => {
  return (
    <Container
      extraClasses={`p-4 rounded-2xl shadow-lg inset-0 ${extraClasses}`}
    >
      {children}
    </Container>
  );
};

export default RoundedContainer;
