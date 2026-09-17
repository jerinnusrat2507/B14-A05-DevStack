import type { Technology } from "../types";

interface Props {
  tech: Technology;
  isAdded: boolean;
  onAdd: (tech: Technology) => void;
}

export default function TechnologyCard({ tech, isAdded, onAdd }: Props) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <img src={tech.icon} alt={tech.name} className="w-9 h-9" />
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-pink-50 text-pink-600">
          {tech.badge}
        </span>
      </div>

      <h3 className="font-bold text-lg text-gray-900">{tech.name}</h3>
      <p className="text-sm text-gray-500 mt-1 flex-1">{tech.description}</p>

      <div className="flex items-center gap-3 text-xs text-gray-500 mt-4 mb-4">
        <span className="px-2 py-1 rounded bg-gray-100 font-medium">{tech.category}</span>
        <span>{tech.difficulty}</span>
        <span className="ml-auto flex items-center gap-1 text-amber-500 font-semibold">
          ★ {tech.rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`w-full py-2.5 rounded-lg font-semibold text-sm transition-colors ${
          isAdded
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-gray-900 text-white hover:bg-gray-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
