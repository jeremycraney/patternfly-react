const PATTERNFLY_ORG = 'http://www.patternfly.org/';

export const BASE_URL = {
  PATTERNFLY_ORG,
  PATTERNFLY_LIBRARY: `${PATTERNFLY_ORG}pattern-library/`,
  REACT_BOOTSTRAP: 'https://react-bootstrap.github.io/'
};

export const DOCUMENTATION_URL = {
  PATTERNFLY_ORG_COMMUNICATION: `${BASE_URL.PATTERNFLY_LIBRARY}communication/`,
  PATTERNFLY_ORG_WIDGETS: `${BASE_URL.PATTERNFLY_LIBRARY}widgets/`,
  PATTERNFLY_ORG_STYLES: `${PATTERNFLY_ORG}styles/`,
  PATTERNFLY_ORG_NAVIGATION: `${BASE_URL.PATTERNFLY_LIBRARY}navigation/`,
  PATTERNFLY_ORG_DATA_VISUALIZATION: `${
    BASE_URL.PATTERNFLY_LIBRARY
  }data-visualization/`,
  PATTERNFLY_ORG_FORMS: `${BASE_URL.PATTERNFLY_LIBRARY}forms-and-controls/`,
  PATTERNFLY_ORG_CONTENT_VIEWS: `${BASE_URL.PATTERNFLY_LIBRARY}content-views/`,
  PATTERNFLY_ORG_CARDS: `${BASE_URL.PATTERNFLY_ORG}pattern-library/cards/`,
  REACT_BOOTSTRAP_COMPONENT: `${BASE_URL.REACT_BOOTSTRAP}components/`,
  REACT_BOOTSTRAP_LAYOUT: `${BASE_URL.REACT_BOOTSTRAP}layout/`
};
