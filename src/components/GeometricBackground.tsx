const GeometricBackground = () => {
  const shapes = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: 40 + Math.random() * 80,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 15 + Math.random() * 15,
    rotation: Math.random() * 360,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((s) => (
        <svg
          key={s.id}
          className="absolute opacity-[0.06]"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            animation: `float-geo ${s.duration}s ease-in-out ${s.delay}s infinite`,
            transform: `rotate(${s.rotation}deg)`,
          }}
          viewBox="0 0 100 100"
          fill="none"
          stroke="url(#geo-gradient)"
          strokeWidth="1"
        >
          <defs>
            <linearGradient id="geo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(193, 100%, 50%)" />
              <stop offset="100%" stopColor="hsl(263, 90%, 66%)" />
            </linearGradient>
          </defs>
          {s.id % 3 === 0 ? (
            // Octagonal star
            <polygon points="50,2 61,35 97,35 68,57 79,91 50,70 21,91 32,57 3,35 39,35" />
          ) : s.id % 3 === 1 ? (
            // Octagon
            <polygon points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30" />
          ) : (
            // Diamond tessellation
            <>
              <polygon points="50,0 100,50 50,100 0,50" />
              <line x1="0" y1="50" x2="100" y2="50" />
              <line x1="50" y1="0" x2="50" y2="100" />
            </>
          )}
        </svg>
      ))}
    </div>
  );
};

export default GeometricBackground;
