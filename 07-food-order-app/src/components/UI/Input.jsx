export default function Input({ label, type, id, ...props }) {
  return (
    <p className="control">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={id} {...props} required />
    </p>
  );
}
