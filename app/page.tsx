const certifications = [
  "AWS Solutions Architect - Associate",
  "AWS Data Analytics - Specialty",
  "GCP Associate Cloud Engineer",
  "GCP Professional Data Engineer",
  "Databricks Data Engineer Associate",
  "HashiCorp Terraform Associate",
  "Azure AI Engineer Associate",
  "Azure AZ-305 Infrastructure Solutions",
];

const projects = [
  {
    name: "mlops-2-showcase",
    repo: "mlops_2_showcase",
    description: "End-to-end MLOps pipeline showcase",
    tags: ["MLOps", "Python"],
  },
  {
    name: "databricks-1-showcase",
    repo: "databricks_1_showcase",
    description: "Databricks data engineering showcase",
    tags: ["Databricks", "Data Engineering"],
  },
  {
    name: "devops-showcase",
    repo: "devops_showcase_simple_python_library",
    description: "DevOps showcase with CI/CD for a Python library",
    tags: ["DevOps", "CI/CD", "Python"],
  },
  {
    name: "gitops-infra",
    repo: "gitops_infra",
    description: "GitOps infrastructure with Flux and Kubernetes",
    tags: ["GitOps", "Kubernetes"],
  },
  {
    name: "python-boilerplate",
    repo: "python-boilerplate",
    description: "Python project template with best practices",
    tags: ["Python", "Template"],
  },
 
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 font-sans dark:bg-zinc-950">
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Romulo Silva Rosa
          </h1>
          <p className="mt-3 text-xl text-zinc-600 dark:text-zinc-400">
            MLOps Engineer & Enterprise AI Architect
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
            A decade of software engineering experience building ML platforms,
            data pipelines, and cloud infrastructure. Based in Florianopolis,
            Brazil.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="https://github.com/RomuloSilvaRosa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-600 underline underline-offset-4 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/romulosrosa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-600 underline underline-offset-4 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-12">
        <section>
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Certifications
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
              >
                {cert}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Open Source Projects
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <a
                key={project.repo}
                href={`https://github.com/RomuloSilvaRosa/${project.repo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-lg border border-zinc-200 bg-white p-5 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600"
              >
                <h3 className="font-mono text-sm font-semibold text-zinc-900 group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-zinc-100 px-1.5 py-0.5 text-xs text-zinc-500 dark:bg-zinc-800 dark:text-zinc-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Education
          </h2>
          <div className="mt-4">
            <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
              B.Sc. Automation Engineering
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Universidade Federal do Rio Grande (FURG) - 2012-2017
            </p>
            <p className="mt-1 text-xs text-zinc-400 dark:text-zinc-500">
              Outstanding student of the class 2/2017
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-5xl px-6 py-6 text-center text-sm text-zinc-400 dark:text-zinc-500">
          Romulo Silva Rosa
        </div>
      </footer>
    </div>
  );
}
