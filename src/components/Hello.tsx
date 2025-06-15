import "./src/styles/global.css";

export default function Hello({ name }: { name: string }) {
  return (
    <main className="bg-tertiory border h-screen">
      <header className="p-4">
        <div className="flex justify-between items-center">
          <img className="w-4 h-4" src="../../public/favicon.png" alt="" />
          <h3>Hello</h3>
        </div>
      </header>
      <p className="text-red-500 text-2xl">Hello from Astro {name}</p>
    </main>
  );
}
