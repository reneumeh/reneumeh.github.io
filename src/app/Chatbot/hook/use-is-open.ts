import { useState } from 'react';

const useIsOpen = () => {
  const [isOpen, setIsOpen] = useState(true);
  return { isOpen, setIsOpen };
};

export default useIsOpen;
