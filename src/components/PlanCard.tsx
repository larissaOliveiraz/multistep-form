type Props = {
   title: string;
   type: string;
   price: number;
   active: boolean;
   onClick: () => void;
};

export const PlanCard = ({ title, type, price, active, onClick }: Props) => {
   return (
      <div
         onClick={onClick}
         className={`p-3 pr-6 border-2 rounded-lg cursor-pointer hover:border-indigo-900 ${
            active && "border-indigo-900"
         }`}
      >
         <div
            className={`w-8 h-8 mt-2 rounded-full mb-8 ${
               title === "Arcade" && "bg bg-yellow-600"
            } ${title === "Advanced" && "bg-red-700"} ${
               title === "Pro" && "bg-blue-900"
            }`}
         />
         <div className="leading-5">
            <p className="font-semibold ">{title}</p>
            <span className="text-sm text-gray-400">
               ${price}/{type}
            </span>
         </div>
      </div>
   );
};
