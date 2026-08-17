import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Kovalen",
    description: "Matchmaking app for study partners, conceptualized with swiping. Engineered with Flutter and Supabase.",
    tags: ["Flutter", "Supabase", "Mobile App"],
  },
  {
    title: "Indotech Teknisi App",
    description: "A comprehensive mobile tool for technicians to view schedules, manage tasks, and submit reporting logs. Engineered with Flutter and Supabase.",
    tags: ["Flutter", "Supabase", "Mobile App"],
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-24 space-y-12 max-w-5xl mx-auto px-6">
      <div className="space-y-4 text-center">
        <h2 className="text-4xl font-playfair font-bold tracking-tight">Curated Exhibits</h2>
        <p className="text-muted-foreground font-lora max-w-2xl mx-auto text-lg">
          A selection of works showcasing engineering precision and elegant design.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-border/50 bg-background/50 backdrop-blur-sm">
            <CardHeader className="space-y-4">
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <Badge variant="secondary" key={tag} className="font-lora font-normal text-xs uppercase tracking-wider">
                    {tag}
                  </Badge>
                ))}
              </div>
              <CardTitle className="font-playfair text-2xl group-hover:text-primary transition-colors">
                {project.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="font-lora text-base leading-relaxed text-muted-foreground">
                {project.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
