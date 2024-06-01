import React from "react";

const Alert = (props) => {
  return (
    <div className={`w-full  absolute z-10 flex justify-end mt-[10px] h-16 `}>
      {
        props.alert && (<div id="alert-border-2"
          className="flex alert items-center  p-4  text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800"
          role="alert"
        >

          <div className="ms-3 text-sm font-medium">
            {props.alert.message}

          </div>
          <button
            type="button"
            className="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"
            data-dismiss-target="#alert-border-2"
            aria-label="Close"
          >
            <span className="sr-only">Dismiss</span>

          </button>
        </div>)

      }
    </div>
  );
};

export default Alert;
