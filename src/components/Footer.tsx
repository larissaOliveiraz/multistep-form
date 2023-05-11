"use client";
import { useRouter } from "next/navigation";
import { Button } from "./Button";

type Props = {
   title: string;
   goBack?: boolean;
};

export const Footer = ({ goBack, title }: Props) => {
   const { back } = useRouter();

   return (
      <footer className={`flex ${goBack ? "justify-between" : "justify-end"}`}>
         {goBack && (
            <button
               type="button"
               onClick={() => back()}
               className="font-semibold text-gray-400 outline-none hover:text-indigo-900"
            >
               Go Back
            </button>
         )}

         <Button title={title} />
      </footer>
   );
};
