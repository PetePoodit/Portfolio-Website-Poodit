interface WorkIndicatorProps {
  totalItems: number;
  currentIndex: number;
}

export default function WorkIndicator({
  totalItems,
  currentIndex,
}: WorkIndicatorProps) {
  return (
    <div className="flex items-center justify-center gap-3 bg-black/60 px-4 py-2 rounded-full backdrop-blur-md border border-white/10 shadow-lg">
      {Array.from({ length: totalItems }).map((_, i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            i === currentIndex ? "bg-white scale-125" : "bg-gray-600"
          }`}
        />
      ))}
    </div>
  );
}
