import ReactDOM from 'react-dom/client';

import { Checking, Counter } from 'true-npm-package-core/components';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
  <div>
    <Checking />
    <Counter />
  </div>
);
