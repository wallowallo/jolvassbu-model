import { JolvassbuModelPage } from './app.po';

describe('jolvassbu-model App', () => {
  let page: JolvassbuModelPage;

  beforeEach(() => {
    page = new JolvassbuModelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
