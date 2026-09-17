# Dev Stack

**Dev Stack** is a React web app that helps developers explore frontend, backend,
database, and tooling technologies, compare them side by side, and assemble a
personal "stack" of technologies for their next project.

## 🛠 Technologies Used

- React.js (TypeScript)
- Tailwind CSS
- React-Toastify (NPM package)
- JSON (for technology data)
- Vite (build tool)

## ✨ Features

1. **Build-your-stack workflow** — browse 12 technologies across Frontend,
   Backend, Database, Language, Styling, and DevOps categories, and add any of
   them to a live "Your Stack" sidebar with a single click.
2. **Guarded add/remove logic** — the same technology can't be added twice
   (a toast warning fires instead), each card shows its own "✓ Added to Stack"
   state, and items can be removed individually or all at once, each backed
   by a toast confirmation.
3. **Fully responsive, gradient-branded UI** — a sticky navbar that collapses
   into a mobile hamburger menu, a 3/2/1-column responsive technology grid,
   and a single shared orange → pink → violet gradient (defined once as a CSS
   variable) used across the brand name, hero heading, and primary buttons.

## 📋 React Questions

**i. What is JSX, and why is it used in React?**
JSX is a syntax extension for JavaScript that lets you write HTML-like markup
directly inside JavaScript/TypeScript files. React uses it because it lets
you describe what the UI should look like in the same place as the logic
that drives it, and it compiles down to regular `React.createElement()` calls.

**ii. What is the difference between props and state?**
Props are read-only data passed *into* a component from its parent — a
component can't change its own props. State is data a component owns and
manages internally, and changing it (via `useState`/`setState`) triggers a
re-render. Props flow down; state lives locally.

**iii. What does the `useState` hook do, and where did you use it in this project?**
`useState` lets a function component hold and update local state across
re-renders. I used it in `App.tsx` to store the fetched `technologies` list,
the user's selected `stack`, and a `loading` flag.

**iv. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` runs side effects (like data fetching, subscriptions, or timers)
after a component renders. Fetching data is a side effect, not something
that should happen during render itself, so I used `useEffect` with an empty
dependency array (`[]`) to fetch `technologies.json` exactly once, right
after the component first mounts.

**v. Why does every item in a `.map()` list need a unique `key` prop?**
React uses the `key` to track which list item is which between renders, so
it can efficiently update, reorder, or remove only the items that actually
changed instead of re-rendering the whole list. Without a stable unique key,
React can misidentify items and cause bugs or unnecessary re-renders.

**vi. What is conditional rendering? Show one place you used it.**
Conditional rendering means showing different UI depending on some
condition/state, instead of always rendering the same markup. Example: in
`YourStack.tsx`, `stack.length === 0` decides whether to show the
"Your stack is empty." message or the actual list of selected technologies.

**vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
Parent → child: pass data as **props** (e.g. `<TechnologyCard tech={tech} />`).
Child → parent: the parent passes down a **callback function** as a prop
(e.g. `onAdd={handleAdd}`), and the child calls that function — optionally
with arguments — when something happens (like a button click). This is how
`TechnologyCard` tells `App` to add a technology to the stack.
