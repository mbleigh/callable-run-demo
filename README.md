# Callable Run Demo

To get started:

    server/deploy <projectId>

Deploys the Cloud Run service to the specified project. Once that's done, you'll need to configure the `FIRBASE_CONFIG` environment variable:

    gcloud run services update callables --update-env-vars \
      FIREBASE_CONFIG='{"projectId":"<projectId>"}' \
      --project <projectId> \
      --platform managed \
      --region us-central1

Cloud Run services have 80 concurrency set by default, so we can leave that alone.

The client-side is a static HTML page that can be run by calling `firebase emulators:start` from the directory (you may need to run `firebase use <projectId>` first).

Live demo: https://bleigh-sandbox-ota--callable-run-sg2dibb6.web.app/
