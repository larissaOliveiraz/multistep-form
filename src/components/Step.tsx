type Props = {
   number: number;
   step: string;
   title: string;
   active: boolean;
};

export const Step = ({ number, step, title, active }: Props) => {
   return (
      <div className="flex items-center gap-3">
         <div
            className={`${
               active
                  ? "text-blue-900 bg-indigo-200"
                  : "border-2 border-indigo-200 text-gray-200"
            } flex items-center justify-center w-8 h-8 font-bold rounded-full`}
         >
            {number}
         </div>

         <div className="leading-5 text-gray-100">
            <p className="text-xs uppercase opacity-80">{step}</p>
            <h2 className="font-bold uppercase text-md">{title}</h2>
         </div>
      </div>
   );
};
