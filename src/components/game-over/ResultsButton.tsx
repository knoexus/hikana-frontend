import { MouseEvent, useCallback } from 'react';
import OutlineButton from '../common/OutlineButton';
import { useRouter } from 'next/navigation';

const ResultsButton = () => {
  const router = useRouter();

  const handleOnClick = useCallback(
    (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void => {
      e.preventDefault();
      router.push('/results');
    },
    [router],
  );

  return (
    <OutlineButton onClick={handleOnClick} text="My Results" type="info" />
  );
};

export default ResultsButton;
