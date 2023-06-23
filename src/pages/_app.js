import { Amplify, Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsmobile from '../aws-exports';
import AWS from 'aws-sdk';

Amplify.configure({ ...awsmobile, ssr: true });

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }) {

    return (
            <Component {...pageProps} />
    )
}

let ExportedApp;

if (process.env.NODE_ENV === 'development') {
    ExportedApp = MyApp;
} else {
    // If development mode is off, export the app wrapped in the withAuthenticator HOC
    ExportedApp = withAuthenticator(MyApp);
}

export default ExportedApp;
