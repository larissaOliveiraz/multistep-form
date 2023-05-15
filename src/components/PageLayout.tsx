import { ReactNode } from "react";
import { Button } from "./Button";

type Props = {
   title: string;
   subtitle: string;
   buttonTitle: string;
   onClick: () => void;
   children: ReactNode;
};

export const PageLayout = ({
   title,
   subtitle,
   buttonTitle,
   onClick,
   children,
}: Props) => {
   return (
      <div className="h-full flex flex-col justify-between">
         <header>
            <h1 className="text-3xl font-extrabold text-indigo-900">{title}</h1>
            <p className="mt-3 text-sm font-semibold leading-5 text-gray-400">
               {subtitle}
            </p>
         </header>
         <div>{children}</div>
         <div className="flex justify-end items-end">
            <Button title={buttonTitle} onClick={onClick} />
         </div>
      </div>
   );
};
