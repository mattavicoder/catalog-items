import React, { useEffect, useState } from "react";
import { Item } from "../models-interfaces/Item";
import ItemApi from "../service/catalog-service";
import { Link } from "react-router-dom";

type IITemProps = {
  items: Item[];
};

const CatalogList: React.FC<IITemProps> = ({ items }: IITemProps) => {
  const [itemList, setItemList] = useState(items);

  useEffect(() => {
    ItemApi.list().then((data) => {
      setItemList(data);
    });
  }, []);

  return (
    <div className="p-5">
      <button
        type="button"
        className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        <Link to="/item">Create Item</Link>
      </button>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {itemList &&
            itemList.map((i) => {
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={i.name}
                >
                  <td className="px-6 py-4">{i.name}</td>
                  <td className="px-6 py-4">{i.price}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default CatalogList;
