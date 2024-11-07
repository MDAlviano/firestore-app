import React, { useState } from "react";
import { auth } from "./firebase";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";

const AddItem = () => {
  const [item, setItem] = useState("");

  const handleAddItem = async () => {
    try {
      if (item) {
        await addDoc(collection(db, "items"), { name: item });
        setItem("");
        alert("Berhasil menambahkan data");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col p-4 space-y-4 mt-6">
      <h2 className="text-xl font-semibold">Add Item</h2>
      <input type="text" placeholder="Add an item" value={item} onChange={(e) => setItem(e.target.value)} className="w-1/2 p-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <button onClick={handleAddItem} className="w-1/6 px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600">
        Add Item
      </button>
    </div>
  );
};

export default AddItem;
