import type { Technology } from "../types";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

interface Props {
  technologies: Technology[];
  stack: Technology[];
  onAdd: (tech: Technology) => void;
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export default function TechnologiesSection({ technologies, stack, onAdd, onRemove, onRemoveAll }: Props) {
  const stackIds = new Set(stack.map((t) => t.id));

  return (
    <section id="technologies" className="max-w-7xl mx-auto px-5 md:px-8 py-16">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
        Explore the <span className="brand-gradient-text">Technologies</span>
      </h2>
      <p className="text-gray-500 mt-2 mb-10">Pick one technology per category to build your ideal stack.</p>

      <div className="grid lg:grid-cols-[1fr_320px] gap-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech) => (
            <TechnologyCard
              key={tech.id}
              tech={tech}
              isAdded={stackIds.has(tech.id)}
              onAdd={onAdd}
            />
          ))}
        </div>

        <YourStack stack={stack} onRemove={onRemove} onRemoveAll={onRemoveAll} />
      </div>
    </section>
  );
}
