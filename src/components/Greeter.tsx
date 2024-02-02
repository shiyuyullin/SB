interface GreeterProps {
  message: String;
}

export function Greeter({ message }: GreeterProps) {
  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
}
