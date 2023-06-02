import { dateFormatter, textTruncate } from "@/utils/formatters";

export const ArticlesList = () => {
  return (
    <div className="mt-12 mb-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4">
      {Array.from(Array(10).keys()).map((article) => (
        <article
          key={article}
          className="p-2 lg:p-3 min-h-[160px] flex flex-col justify-between gap-10 bg-gradient-to-b from-slate-50 to-orange-50 rounded-md relative before:absolute before:left-0 before:top-3/4 before:-translate-y-1/2 before:w-[2px] before:h-20 before:bg-gradient-to-b before:from-transparent before:via-orange-300 before:to-transparent before:opacity-60 before:transition-all before:duration-500 hover:before:top-1/3 hover:before:opacity-100 font-montserrat tracking-normal"
        >
          <div className="flex justify-between items-center font-[200] text-sm 2xl:text-base">
            <p className="relative before:absolute before:w-full before:h-full before:bg-orange-100 before:bottom-0 before:left-0 before:skew-x-12 before:z-[-1] z-[0] text-orange-500 font-[500]">
              TVN24
            </p>
            <p className="text-slate-400">
              {dateFormatter("2023-06-02T09:41:09.193Z")}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-playfair text-base sm:text-lg 2xl:text-xl">
              Australia’s most decorated soldier loses multiple defamation
              claims against media who accused him of war crimes - CNN
            </p>
            {true ? (
              <p className="text-xs 3xl:text-sm text-slate-500">
                {textTruncate(
                  `The US House of Representatives voted overwhelmingly on Wednesday
              to pass a bill to suspend the nation’s debt limit through January
              1, 2025, as lawmakers race to prevent a catastrophic default.`,
                  90
                )}
              </p>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
};
