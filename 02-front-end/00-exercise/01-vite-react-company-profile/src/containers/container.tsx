export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-width: 1110px; margin: auto; font-size: 16px">
      {children}
    </div>
  );
}
