import type { Technology } from "../types";

interface Props {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export default function YourStack({ stack, onRemove, onRemoveAll }: Props) {
  return (
    <aside className="bg-white border border-gray-200 rounded-2xl p-6 h-fit sticky top-24">
      <h3 className="font-bold text-lg text-gray-900">Your Stack</h3>
      <p className="text-sm text-gray-400 mb-4">
        {stack.length === 0 ? "No technologies selected yet." : `${stack.length} Technology Selected`}
      </p>

      {stack.length === 0 ? (
        <div className="border border-dashed border-gray-200 rounded-xl py-10 text-center text-sm text-gray-400">
          Your stack is empty.
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {stack.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center gap-3 border border-gray-100 rounded-xl p-3"
            >
              <img src={tech.icon} alt={tech.name} className="w-7 h-7" />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm text-gray-900 truncate">{tech.name}</p>
                <p className="text-xs text-gray-400">{tech.category}</p>
              </div>
              <button
                onClick={() => onRemove(tech.id)}
                aria-label={`Remove ${tech.name}`}
                className="text-gray-400 hover:text-red-500 text-lg leading-none px-1"
              >
                ×
              </button>
            </div>
          ))}

          <button
            onClick={onRemoveAll}
            className="mt-2 w-full border border-red-200 text-red-500 font-semibold text-sm py-2.5 rounded-lg hover:bg-red-50 transition-colors"
          >
            Remove All
          </button>
        </div>
      )}
    </aside>
  );
}
