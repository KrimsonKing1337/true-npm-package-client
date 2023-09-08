import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { StoreProvider } from 'true-npm-package-core/store';

import { store } from 'store';

import { App } from './components';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
  <StoreProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </StoreProvider>
);
