## QTify

- QTify is an immersive projet that present an intrusive way to grasp some of the key concept of react and frontEnd Web Development such as the following: - Client Side Rendering of each of the indivdual UI Unit of the application formally termed as components to facilitate smoother transition between any subsequent change
  in the DOM state with the user interacting with the application by allowing optimistic state updates as supported by the rendering engine of react through the process called
  reconciliation.
- The consequently ability to interact with an external store or external depedency by effectively introducing side effect into a react component by still keeping it pure as done with
  with the useEffect hook.
- Optimizing expensive function calls for the subsequent change in values, reference, or both with a components as specified by the relavant react hook including by not limited to useMemo, useCallback, React.memo, etc.
- Tendency to use a mutable refrence of a value whose value we want to preserve throughout the re-renders while still not maintaing it as a state variable as specified by the useRef hook.
- The tendency to provide a custom Hook implementation that could you to perform operations that would otherwise be not plausibale and if plausible would be relatively inefficent as opposed to using custom hooks such sharing stateful logics, event handling operations, side effects, across multiple components without code duplication, etc.
