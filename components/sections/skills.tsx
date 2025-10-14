
const SkillsSection = () => {
    
  const leftColumnSkills = {
    "Core languages": ["C#", "Java", "Javascript", "Python", "Git", "SQL"],
    Infrastructure: ["Docker", "Azure DevOps", "AWS", "Kafka", "Redis", "SUSE Rancher", "Linux", "CyberArk", "Microsoft IIS"],
    "Storage and Databases": ["MSSQL", "OracleSQL", "MongoDB", "Azure Blob"]
  }

  const rightColumnSkills = {
    Frameworks: ["ASP.NET", "Entity Framework", "Fast API", "Angular"],
    "Systems Design Tools": ["Lucid", "REST"],
    "AI and Machine Learning": ["ML.NET", "AI Red Teaming", "Transformers Architecture", "AWS Sage Maker"]
  }

  return (
    <div className="min-h-screen bg-primary/20 text-foreground transition-colors duration-300">
      <div className="container mx-auto px-6 py-12 max-w-6xl">

        {/* Header */}
        <div className="">
          <h1 className="mt-10 mb-12 text-4xl md:text-5xl font-medium text-left">My Skills</h1>
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
