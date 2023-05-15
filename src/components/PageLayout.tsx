import { ReactNode } from "react";

type Props = {
   title: string;
   subtitle: string;
   buttonTitle: string;
   onClick: () => void;
   disabled?: boolean;
   children: ReactNode;
};

export const PageLayout = ({
   title,
   subtitle,
   buttonTitle,
   onClick,
   disabled,
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
            <button
               type="button"
               onClick={onClick}
               disabled={disabled}
               className={`${
                  disabled && "bg-gray-300 hover:bg-gray-300"
               } p-2 px-5 font-semibold text-gray-100 transition-all duration-200 bg-indigo-900 rounded-lg outline-none hover:bg-indigo-700`}
            >
               {buttonTitle}
            </button>
         </div>
      </div>
   );
};
