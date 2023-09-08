import { Wrapper, Counter as LocalCounter } from 'components';
import { Checking, Counter } from 'true-npm-package-core/components';

export const App = () => {
  return (
    <div>
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
    </div>
  );
}
