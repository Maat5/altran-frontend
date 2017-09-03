import { AltranFrontendPage } from './app.po';

describe('altran-frontend App', () => {
  let page: AltranFrontendPage;

  beforeEach(() => {
    page = new AltranFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
