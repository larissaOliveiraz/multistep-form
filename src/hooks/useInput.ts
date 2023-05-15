import { InputType } from "@/types/InputType";
import { ChangeEvent, useState } from "react";

function useInput(options: InputType) {
   const { initialValue = "", validate } = options;
   const [value, setValue] = useState(initialValue);
   const [error, setError] = useState<string | undefined>(undefined);

   const onChange = (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      setValue(newValue);

      if (validate) {
         setError(validate(newValue));
      }
   };

   return { value, onChange, error };
}

export default useInput;
