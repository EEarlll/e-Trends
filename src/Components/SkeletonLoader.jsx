import React from "react";

const SkeletonLoader = () => {
  return (
    <>
      <div className="flex flex-col mb-8 rounded shadow-md w-60 sm:w-80  h-[80] min-w-full animate-pulse">
        <div className="h-48 rounded-t bg-slate-200 dark:bg-gray-500"></div>
        <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-300 dark:bg-gray-600">
          <div className="w-full h-6 rounded bg-gray-400 dark:bg-gray-500"></div>
          <div className="w-full h-6 rounded bg-gray-400 dark:bg-gray-500"></div>
          <div className="w-3/4 h-6 rounded bg-gray-400 dark:bg-gray-500"></div>
        </div>
      </div>
      <div className="flex flex-col mb-8 rounded shadow-md w-60 sm:w-80  h-[80] min-w-full animate-pulse">
        <div className="h-48 rounded-t bg-slate-200 dark:bg-gray-500"></div>
        <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-300 dark:bg-gray-600">
          <div className="w-full h-6 rounded bg-gray-400 dark:bg-gray-500"></div>
          <div className="w-full h-6 rounded bg-gray-400 dark:bg-gray-500"></div>
          <div className="w-3/4 h-6 rounded bg-gray-400 dark:bg-gray-500"></div>
        </div>
      </div>
    </>
  );
};

export default SkeletonLoader;
