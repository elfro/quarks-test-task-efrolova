import { DependencyList, useEffect, useRef } from 'react';

function useAutoFocusElement(deps?: DependencyList) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [deps]);

  return inputRef;
}

export default useAutoFocusElement;
