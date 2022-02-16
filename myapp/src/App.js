import logo from './logo.svg';
import './App.css';
import * as Sentry from "@sentry/browser";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: "https://83555e1d5a4744ed9e87127f6c0f6509@o1145026.ingest.sentry.io/6209761",

  // Alternatively, use `process.env.npm_package_version` for a dynamic release version
  // if your build tool supports it.
  release: "my-project-name@2.3.12",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

});

myUndefinedFunction();

function App() {
  return (
    <h1>Hello World 0.0</h1>
  );
}


export default App;
