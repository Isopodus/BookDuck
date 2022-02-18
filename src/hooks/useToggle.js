import { useCallback, useState } from "react";

export const useToggle = defaultValue => {
  const [value, setValue] = useState(defaultValue);

  const toggle = useCallback(() => setValue(prev => !prev), [setValue]);

  return [value, toggle];
};
