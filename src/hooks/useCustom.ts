import { useEffect, useState } from "react";

export default function useCustom(defaultValue?: string) {
  const [value, setValue] = useState(defaultValue || "");

  useEffect(() => {
    setValue("updated"), [];
  });

  return value;
}
