const skills = {
  "Core languages": ["Rust", "Typescript", "PHP", "SQL"],
  Frameworks: ["Actix", "Tokio", "Vue/Nuxt", "React", "Laravel"],
  Infrastructure: [
    "Docker",
    "AWS",
    "Kafka",
    "Redis",
    "PostgreSQL",
    "Prometheus",
    "HAProxy",
  ],
  "Systems Design Tools": ["Figma", "Opentelemetry", "REST"],
};

const SkillsSection = () => {
    
  const leftColumnSkills = {
    "Core languages": ["Rust", "Typescript", "PHP", "SQL"],
    Infrastructure: ["Docker", "AWS", "Kafka", "Redis", "PostgreSQL", "Prometheus", "HAProxy"],
  }

  const rightColumnSkills = {
    Frameworks: ["Actix", "Tokio", "Vue/Nuxt", "React", "Laravel"],
    "Systems Design Tools": ["Figma", "Opentelemetry", "REST"],
  }

  return (
    <div className="min-h-screen bg-primary/20 text-foreground transition-colors duration-300">
      <div className="container mx-auto px-6 py-12 max-w-6xl">

        {/* Header */}
        <div className="">
          <h1 className="mt-20 mb-12 text-4xl md:text-5xl font-medium text-left">My Skills</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {/* Left Column */}
          <div className="space-y-12">
            {Object.entries(leftColumnSkills).map(([category, items]) => (
              <div key={category}>
                <h2 className="text-base font-normal text-foreground mb-4">{category}</h2>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-md border border-border bg-card text-card-foreground text-sm font-normal hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {Object.entries(rightColumnSkills).map(([category, items]) => (
              <div key={category}>
                <h2 className="text-base font-normal text-foreground mb-4">{category}</h2>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-md border border-border bg-card text-card-foreground text-sm font-normal hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default SkillsSection;
