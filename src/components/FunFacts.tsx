import React from 'react';
import { Car, Gamepad2, Bike } from 'lucide-react';

const FunFacts = () => {
  const items = [
    {
      icon: <Car size={28} />,
      title: 'Scenic Drives',
      desc: 'Clearing my head with music and endless roads',
    },
    {
      icon: <Gamepad2 size={28} />,
      title: 'Chess Duels',
      desc: '4-move mates, traps, strategy — I see 10 moves orrr maybe 2 moves ahead💀',
    },
    {
      icon: <Bike size={28} />,
      title: 'Trail Riding',
      desc: 'Just me, the trail, and lo-fi beats in the breeze',
    },
  ];

  return (
    <section id="fun-facts" className="py-24 bg-white text-black dark:bg-gray-950 dark:text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-12">When I’m Not Coding,im usually,</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg p-6 flex flex-col items-center text-center"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-medium mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFacts;
