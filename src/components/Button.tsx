type Props = {
   title: string;
};

export const Button = ({ title }: Props) => {
   return (
      <button
         type="submit"
         className="p-2 px-5 font-semibold text-gray-100 transition-all duration-200 bg-indigo-900 rounded-lg outline-none hover:bg-indigo-700"
      >
         {title}
      </button>
   );
};
