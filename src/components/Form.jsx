import React, { useState } from "react";

const Form = () => {
  const [input, setInput] = useState();
  const [items, setItems] = useState([]);

  const addChange = (e) => {
    e.preventDefault();
    if (input) {
      setItems([...items, input]);
      setInput("");
    }
  };

  const deleteBtn = (ele) => {
    setItems(items.filter((x) => x !== ele));
  };

  return (
    <div className="container justify-center mt-56">
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-42 space-y-8">
          <div>
            <h2 className="mt-6 text-center text-xl font-semibold text-indigo-500">
              YAPILCAKLAR LİSTESİ
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={addChange}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Yapılacak İş
                </label>
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  id="text"
                  name="text"
                  type="text"
                  autoComplete="text"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Yapılacak İş"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                Ekle
              </button>
            </div>
          </form>
          <ul class="text-center w-54 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {items.map((ele, i) => {
          return (
            <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              {ele}
              <button className="" onClick={() => deleteBtn(ele)}>X</button>
              </li>
          );
        })}
        </ul>
        </div>
      </div> 
      </div>
  );
};

export default Form;
