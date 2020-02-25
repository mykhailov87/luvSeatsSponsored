// Core
import { useState, useMemo } from 'react';

export function useData() {
  const [data] = useState([
    { id: '1', text: 'The American Cancer Society is leading the fight for a world without cancer. We’re finding cures and doing so much more.', textIndent: false },
    { id: '2', text: 'We’re supporting patients with free lodging near hospitals, free rides to treatment, and our live 24/7 cancer helpline.', textIndent: true },
    { id: '3', text: 'We’re providing information, tools and services to help people cope with the challenges and questions that come with a cancer diagnosis.', textIndent: true },
    { id: '4', text: 'We’re making breakthroughs in research and urging lawmakers to improve access to care.', textIndent: true },
    { id: '5', text: 'When it comes to cancer, we are the only organization attacking from every angle.', textIndent: false },
  ]);

  return useMemo(() => ({ data }), [data]);
}
