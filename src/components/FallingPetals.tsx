import { useEffect, useState } from 'react';

export const FallingPetals = () => {
  const [petals, setPetals] = useState<Array<{ id: number; position: number; delay: number }>>([]);

  useEffect(() => {
    const petalArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      position: Math.random() * 100,
      delay: Math.random() * 8
    }));
    setPetals(petalArray);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="falling-petals"
          style={{
            '--position': petal.position,
            animationDelay: `${petal.delay}s`,
            left: `${petal.position}%`
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};