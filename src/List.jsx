import Card from './Card.jsx';

export default function List({ category = 'Fruits', items = [] }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <Card title={category}>
      <ul>
        {items.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </Card>
  );
}
