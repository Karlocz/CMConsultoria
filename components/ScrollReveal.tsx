
import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  threshold?: number;
  delay?: number; // Atraso em milissegundos
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  threshold = 0.1, 
  delay = 0,
  className = "",
  direction = 'up',
  distance = 24,
  duration = 1000
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Inicia a exibição respeitando o delay
          const timer = setTimeout(() => {
            setIsVisible(true);
          }, delay);
          
          if (ref.current) {
            observer.unobserve(ref.current);
          }
          
          return () => clearTimeout(timer);
        }
      },
      {
        threshold: threshold,
        rootMargin: "0px 0px -10% 0px" // Trigger 10% antes de entrar totalmente na tela
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay]);

  // Define os estilos de transformação baseados na direção escolhida
  const getTransformStyles = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up': return `translateY(${distance}px)`;
        case 'down': return `translateY(-${distance}px)`;
        case 'left': return `translateX(${distance}px)`;
        case 'right': return `translateX(-${distance}px)`;
        case 'none': return 'scale(0.95)';
        default: return `translateY(${distance}px)`;
      }
    }
    return 'translate(0, 0) scale(1)';
  };

  return (
    <div
      ref={ref}
      style={{
        transitionProperty: 'opacity, transform',
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: isVisible ? 1 : 0,
        transform: getTransformStyles(),
        willChange: 'opacity, transform'
      }}
      className={className}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
