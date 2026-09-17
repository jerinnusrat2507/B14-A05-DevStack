import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { Technology } from "./types";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologiesSection from "./components/TechnologiesSection";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  // Load technology data from the local JSON file (never hardcoded in the component).
  useEffect(() => {
    fetch("/data/technologies.json")
      .then((res) => res.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to load technology data.");
        setLoading(false);
      });
  }, []);

  const handleAdd = (tech: Technology) => {
    const alreadyAdded = stack.some((item) => item.id === tech.id);
    if (alreadyAdded) {
      toast.warn(`${tech.name} is already in your stack!`);
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemove = (id: string) => {
    const removed = technologies.find((t) => t.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    if (removed) toast.info(`${removed.name} removed from your stack.`);
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.info("Stack cleared.");
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />

      {loading ? (
        <Loading />
      ) : (
        <TechnologiesSection
          technologies={technologies}
          stack={stack}
          onAdd={handleAdd}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      )}

      <Footer />
      <ToastContainer position="top-right" autoClose={2500} />
    </div>
  );
}

export default App;
