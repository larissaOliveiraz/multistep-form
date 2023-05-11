import { ChangeEvent, useState } from "react";

type Props = {
   initialValue?: boolean;
};

function useCheckbox(options: Props) {
   const { initialValue = false } = options;
   const [value, setValue] = useState(initialValue);
   // const [error, setError] = useState<string | undefined>(undefined);

   const onChange = (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.checked;
      setValue(newValue);

      //  if (validate) {
      //    setError(validate(newValue));
      //  }
   };

   return { value, onChange };
}

export default useCheckbox;
