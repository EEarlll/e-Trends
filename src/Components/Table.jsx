import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Table({ extractedDataTopics, extractedDataSearch }) {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-4 ">
      <div className="flex justify-center">
        <div className="mt-4 sm:mt-0">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(1);
            }}
            className="inline-flex items-center mr-4
            justify-center rounded-md border 
            border-transparent bg-indigo-600 
            px-11 py-2 text-sm font-medium text-white
            shadow-sm hover:bg-indigo-700 focus:outline-none
             focus:ring-2 focus:ring-indigo-500 
             focus:ring-offset-2 sm:w-auto"
          >
            Topic
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(2);
            }}
            className="inline-flex items-center 
            justify-center rounded-md border 
            border-transparent bg-indigo-600 
            px-11 py-2 text-sm font-medium text-white
            shadow-sm hover:bg-indigo-700 focus:outline-none
             focus:ring-2 focus:ring-indigo-500 
             focus:ring-offset-2 sm:w-auto"
          >
            Search
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            <div className="shadow-sm ring-1 ring-black ring-opacity-5">
              <table
                className="min-w-full border-separate "
                style={{ borderSpacing: 0 }}
              >
                <thead className="bg-gray-50  ">
                  <tr>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 dark:bg-gray-800  bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-white backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 dark:bg-gray-800 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white backdrop-blur backdrop-filter sm:table-cell pl-7"
                    >
                      Id
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 dark:bg-gray-800 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white backdrop-blur backdrop-filter lg:table-cell"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 dark:bg-gray-800 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white backdrop-blur backdrop-filter"
                    >
                      Val
                    </th>
                  </tr>
                </thead>
                <tbody className={openTab === 1 ? "bg-white" : "hidden"}>
                  {extractedDataTopics.map((item, idx) => (
                    <tr key={idx}>
                      <td
                        className={classNames(
                          idx !== item.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 dark:text-white dark:bg-gray-700 sm:pl-6 lg:pl-8"
                        )}
                      >
                        {idx + 1}
                      </td>
                      <td
                        className={classNames(
                          idx !== item.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 dark:text-white dark:bg-gray-700 sm:pl-6 lg:pl-8"
                        )}
                      >
                        {item.id}
                      </td>
                      <td
                        className={classNames(
                          idx !== item.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-white dark:bg-gray-700 hidden sm:table-cell"
                        )}
                      >
                        {item.type}
                      </td>
                      <td
                        className={classNames(
                          idx !== item.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-white dark:bg-gray-700 hidden lg:table-cell"
                        )}
                      >
                        {item.val}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tbody className={openTab === 2 ? "bg-white" : "hidden"}>
                  {extractedDataSearch.map((item, idx) => (
                    <tr key={idx}>
                      <td
                        className={classNames(
                          idx !== item.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 dark:text-white dark:bg-gray-700 sm:pl-6 lg:pl-8"
                        )}
                      >
                        {idx + 1}
                      </td>
                      <td
                        className={classNames(
                          idx !== item.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 dark:text-white dark:bg-gray-700 sm:pl-6 lg:pl-8"
                        )}
                      >
                        {item.id}
                      </td>
                      <td
                        className={classNames(
                          idx !== item.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden dark:text-white dark:bg-gray-700 sm:table-cell"
                        )}
                      >
                        {item.type}
                      </td>
                      <td
                        className={classNames(
                          idx !== item.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden dark:text-white dark:bg-gray-700 lg:table-cell"
                        )}
                      >
                        {item.val}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
