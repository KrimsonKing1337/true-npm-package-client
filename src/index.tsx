import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { StoreProvider } from 'true-npm-package-core/store';
import { Checking, Counter } from 'true-npm-package-core/components';

import { store } from 'store';

import { Wrapper, Counter as LocalCounter } from 'components';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
  <StoreProvider>
    <Provider store={store}>
      <Wrapper>
        <h1>
          Elements from core
        </h1>

        <Checking />
        <Counter />
      </Wrapper>

      <Wrapper>
        <h1>
          Elements from local
        </h1>

        <LocalCounter />
      </Wrapper>

      <Wrapper>
        <h4>
          They both use identical stores (namespaces, selectors and so on),
          <br />
          but work together without any issues or collisions
        </h4>
      </Wrapper>
    </Provider>
  </StoreProvider>
);
