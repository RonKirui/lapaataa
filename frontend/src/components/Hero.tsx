import heroImage from "../assets/hero.jpg";

export default function Hero() {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative text-white text-center">
        <h1 className="text-5xl font-bold">Restoring Hope to the Lost</h1>
        <p className="mt-4 text-lg">Lapaataa Foundation</p>
      </div>
    </div>
  );
}
