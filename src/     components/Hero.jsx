export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-900 to-black text-white">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm [Your Name]</h1>
      <p className="text-xl mb-8">I build cool things with code.</p>
      <a href="#projects" className="px-6 py-3 bg-blue-500 rounded">See my work</a>
    </section>
  );
}
