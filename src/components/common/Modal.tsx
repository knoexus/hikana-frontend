'use client';

import { useOutsideClickResolver } from '@/utilities/hooks/useOutsideClickResolver';
import { PropsWithChildren, memo } from 'react';

const Modal = ({
  isVisible,
  title,
  children,
  onClose,
}: PropsWithChildren<{
  isVisible: boolean;
  title: string;
  onClose: () => void;
}>) => {
  const modalRef = useOutsideClickResolver<HTMLDivElement>(onClose);

  return (
    <div
      style={{ visibility: isVisible ? 'visible' : 'hidden' }}
      tabIndex={-1}
      aria-hidden="true"
      className={`fixed z-50 w-full h-full inset-0 flex justify-center items-center ${
        isVisible && 'bg-gray-600 bg-opacity-80'
      }`}
    >
      {/* Placing ref on a relative element is essential*/}
      <div className="relative w-full max-w-2xl max-h-full" ref={modalRef}>
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* Modal header */}
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
            <button
              onClick={onClose}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          <div className="p-6 space-y-6 text-gray-500 dark:text-gray-400">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Modal);
