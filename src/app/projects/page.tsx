import ProjectCard from "@/components/ProjectCard"

export default function ProjectsPage() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <ProjectCard title="Agent" description="Python bot for Ticketmaster" link="https://github.com/you/project" />
    </main>
  )
}
