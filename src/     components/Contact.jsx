export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="mb-6">Let's connect!</p>
      <div className="flex justify-center space-x-6">
        <a href="https://linkedin.com/in/YOUR_LINK" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
        <a href="https://github.com/srideviblogs" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
        <a href="mailto:sridevi.velpula.official@gmail.com" className="hover:underline">Email</a>
      </div>
    </section>
  );
}
