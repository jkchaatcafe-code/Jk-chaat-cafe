import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export type JourneyStep = { num: string; title: string; text: string };

export default function Journey({ steps, showLine = true }: { steps: JourneyStep[]; showLine?: boolean }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const inView = useInView(trackRef, { once: true, amount: 0.3 });
  const [doneIdx, setDoneIdx] = useState(-1);

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const interval = setInterval(() => {
      setDoneIdx(i);
      i++;
      if (i >= steps.length) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, [inView, steps.length]);

  return (
    <div className="journey-track" ref={trackRef}>
      {showLine && (
        <>
          <div className="journey-line"></div>
          <div className="journey-line-fill" style={{ width: inView ? '100%' : '0%' }}></div>
        </>
      )}
      <div className="journey-steps">
        {steps.map((s, i) => (
          <div className={`j-step ${i <= doneIdx ? 'done' : ''}`} key={s.num}>
            <div className="j-num">{s.num}</div>
            <h4>{s.title}</h4>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
