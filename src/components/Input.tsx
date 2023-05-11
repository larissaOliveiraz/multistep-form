"use client";
import { useState } from "react";

type Props = {
   type: string;
};

export const Input = ({ type }: Props) => {
   const [value, setValue] = useState("");
   const [focused, setFocused] = useState(false);

   return (
      <div
         className={`${
            focused ? "border-indigo-900" : "border-gray-300"
         } border rounded-lg flex`}
      >
         <input
            type={type}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="flex-1 p-2 mx-2 font-bold outline-none"
         />
      </div>
   );
};
