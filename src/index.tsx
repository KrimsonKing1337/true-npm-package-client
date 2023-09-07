import ReactDOM from 'react-dom/client';

import { StoreProvider } from 'true-npm-package-core/store';
import { Checking, Counter } from 'true-npm-package-core/components';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
  <StoreProvider>
    <Checking />
    <Counter />
  </StoreProvider>
);
