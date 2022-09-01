export default function Animal({ type, name, age }) {
  return (
    <li>
      <strong>{type}</strong> 
      <i> - {name}</i> 
      <small> - {age} years old </small>
    </li>
  );
}