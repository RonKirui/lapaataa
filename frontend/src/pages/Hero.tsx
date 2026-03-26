import heroImage from "../assets/lapataahero.jpeg";

export default function Hero() {
  return (
    <div>
      <div
        className="w-full min-h-screen relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="w-full"></div>
      </div>
    </div>
  );
}
