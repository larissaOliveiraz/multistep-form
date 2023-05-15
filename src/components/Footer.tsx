"use client";
import { useRouter } from "next/navigation";
import { Button } from "./Button";

type Props = {
   title: string;
   goBack?: boolean;
};

export const Footer = ({ title }: Props) => {
   return (
      <footer className="flex justify-end">
         <Button title={title} />
      </footer>
   );
};
