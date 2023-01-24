import { AnswersHeadlessProvider } from '@yext/answers-headless-react';

type HeadlessProviderProps = Parameters<typeof AnswersHeadlessProvider>[0];

export const answersHeadlessConfig: HeadlessProviderProps = {
  apiKey: 'bd7dc040fd7cca80bca7905845092d43',
  experienceKey: 'restaurant-location',
  locale: 'en',
  sessionTrackingEnabled: true,
  endpoints: {
    universalSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/query",
    verticalSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/query",
    questionSubmission: "https://liveapi-sandbox.yext.com/v2/accounts/me/createQuestion",
    universalAutocomplete: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/autocomplete",
    verticalAutocomplete: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/autocomplete",
    filterSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/filtersearch"
  }
};