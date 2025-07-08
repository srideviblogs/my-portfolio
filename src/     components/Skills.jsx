export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <ul className="flex flex-wrap justify-center gap-4 text-lg">
        <li className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded">AWS</li>
        <li className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded">Azure</li>
        <li className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded">CI/CD</li>
        <li className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded">Docker</li>
        <li className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded">Kubernetes</li>
        <li className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded">Terraform</li>
      </ul>
    </section>
  );
}
