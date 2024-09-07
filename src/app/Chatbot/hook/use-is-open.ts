import { useState } from 'react';

const useIsOpen = () => {
  const [isOpen, setIsOpen] = useState(false);
  return { isOpen, setIsOpen };
};

export default useIsOpen;
