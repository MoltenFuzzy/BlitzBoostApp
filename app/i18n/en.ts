const en = {
  common: {
    ok: "OK!",
    cancel: "Cancel",
    back: "Back",
    logOut: "Log Out",
  },
  welcomeScreen: {
    postscript:
      "psst  — This probably isn't what your app looks like. (Unless your designer handed you these screens, and in that case, ship it!)",
    readyForLaunch: "Your app, almost ready for launch!",
    exciting: "(ohh, this is exciting!)",
    button: "Let's go!",
  },
  loginScreen: {
    signIn: "Sign In",
    enterDetails:
      "Enter your details below to unlock top secret info. You'll never guess what we've got waiting. Or maybe you will; it's not rocket science here.",
    emailFieldLabel: "Email",
    passwordFieldLabel: "Password",
    emailFieldPlaceholder: "Enter your email address",
    passwordFieldPlaceholder: "Super secret password here",
    tapToSignIn: "Tap to sign in!",
    hint: "Hint: you can use any email address and your favorite password :)",
  },
  homeScreen: {
    title: "Workouts",
    subtitle: "Edit me in `app/screens/HomeScreen`",
    showMore: "Show more",
    showLess: "Show less",
    exampleButton: "Example button",
    exampleButtonDescription: "See `app/components/ExampleButton` for how to use this component.",
    openSettings: "Open Settings",
    openSettingsDescription: "See `app/components/SettingsButton` for how to use this component.",
    openExample: "Open Example",
    openExampleDescription: "See `app/screens/ExampleListScreen` for how to use this component.",
    openRNDebugger: "Open React Native Debugger",
  },
  errorScreen: {
    title: "Something went wrong!",
    friendlySubtitle:
      "This is the screen that your users will see in production when an error is thrown. You'll want to customize this message (located in `app/i18n/en.ts`) and probably the layout as well (`app/screens/ErrorScreen`). If you want to remove this entirely, check `app/app.tsx` for the <ErrorBoundary> component.",
    reset: "RESET APP",
  },
  emptyStateComponent: {
    generic: {
      heading: "So empty... so sad",
      content: "No data found yet. Try clicking the button to refresh or reload the app.",
      button: "Let's try this again",
    },
  },
  navigator: {
    workoutsTab: "Workouts",
    settingsTab: "Settings",
  },
}

export default en
export type Translations = typeof en
