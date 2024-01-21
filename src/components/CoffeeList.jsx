import { useEffect, useState } from 'react';
import coffeeList from '../data/coffee-list.json';
import Card from './Card.jsx';

export default function CoffeeList() {
  const [coffees, setCoffees] = useState([]);

  const selectAvailable = () => {
    const available = coffeeList.filter((coffee) => coffee.stock > 0);
    setCoffees(available);
  };

  const selectAll = () => {
    setCoffees(coffeeList);
  };

  useEffect(() => {
    setCoffees(coffeeList);
  }, []);

  return (
    <>
      <article className="flex gap-x-2 text-sm font-semibold">
        <button
          onClick={selectAll}
          className="bg-[#6F757C] text-white/80 px-4 py-2 rounded-md hover:bg-gray-600 transition-all">
          All Products
        </button>
        <button
          onClick={selectAvailable}
          className="px-4 py-2 rounded-md hover:ring-2 ring-[#6F757C] transition-all">
          Available Now
        </button>
      </article>
      <article className="grid gap-20 lg:grid-cols-2 mt-6 xl:grid-cols-3 xl:gap-10">
        {coffees.map((coffee) => (
          <Card key={coffee.id} {...coffee} />
        ))}
      </article>
    </>
  );
}
