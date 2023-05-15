type Props = {
   title: string;
   onClick: () => void;
};

export const Button = ({ title, onClick }: Props) => {
   return (
      <button
         type="button"
         onClick={onClick}
         className="p-2 px-5 font-semibold text-gray-100 transition-all duration-200 bg-indigo-900 rounded-lg outline-none hover:bg-indigo-700"
      >
         {title}
      </button>
   );
};
