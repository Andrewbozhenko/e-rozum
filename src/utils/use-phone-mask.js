import { useEffect, useRef } from "react";
import IMask from "imask";
import { PHONE_MASK, UKRAINIAN_OPERATOR_CODES } from "./phone";

export const usePhoneMask = (setValue, fieldName = "phone") => {
  const inputRef = useRef(null);
  const maskRef = useRef(null);

  useEffect(() => {
    const input = inputRef.current;
    if (!input) return undefined;

    const mask = IMask(input, {
      mask: PHONE_MASK,
      lazy: false,
      placeholderChar: "_",
      blocks: {
        oper: {
          mask: IMask.MaskedEnum,
          enum: UKRAINIAN_OPERATOR_CODES,
        },
      },
    });
    maskRef.current = mask;

    const syncValue = () => setValue(fieldName, mask.value, { shouldDirty: true });

    mask.on("accept", syncValue);
    syncValue();

    return () => {
      mask.destroy();
      maskRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fieldName]);

  const resetMask = () => {
    if (maskRef.current) {
      maskRef.current.value = "";
      setValue(fieldName, maskRef.current.value);
    }
  };

  return { inputRef, resetMask };
};
