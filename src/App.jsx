import Header from './Header.jsx';
import List from './List.jsx';
import './Tutorial.css';

const fruits = [
  { id: 1, name: 'Strawberry', tier: 'B' },
  { id: 2, name: 'Banana', tier: 'S' },
  { id: 3, name: 'Mango', tier: 'S' },
  { id: 4, name: 'Orange', tier: 'A' },
  { id: 5, name: 'Apple', tier: 'A' },
  { id: 6, name: 'Pear', tier: 'B' },
  { id: 7, name: 'Grapefruit', tier: 'C' },
  { id: 8, name: 'Papaya', tier: 'C' },
];

const tiers = ['S', 'A', 'B', 'C'];
const rankedFruits = [...fruits].sort((first, second) => first.name.localeCompare(second.name));

export default function App() {
  return (
    <>
      <Header />
      <main className="tutorial fruit-tiers">
        {tiers.map((tier) => (
          <List
            key={tier}
            category={`${tier} tier`}
            items={rankedFruits.filter((fruit) => fruit.tier === tier)}
          />
        ))}
      </main>
    </>
  );
}
