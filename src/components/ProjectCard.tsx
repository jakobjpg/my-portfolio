type Props = {
  title: string
  description: string
  link: string
}

export default function ProjectCard({ title, description, link }: Props) {
  return (
    <a href={link} target="_blank" className="block border p-4 rounded-lg hover:shadow">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
    </a>
  )
}
