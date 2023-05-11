type Props = {
   title: string;
   subtitle: string;
};

export const Header = ({ title, subtitle }: Props) => {
   return (
      <header>
         <h1 className="text-3xl font-extrabold text-indigo-900">{title}</h1>
         <p className="mt-3 text-sm font-semibold leading-5 text-gray-400">
            {subtitle}
         </p>
      </header>
   );
};
