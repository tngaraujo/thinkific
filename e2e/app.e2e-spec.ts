import { ThinkificPage } from './app.po';

describe('thinkific App', function() {
  let page: ThinkificPage;

  beforeEach(() => {
    page = new ThinkificPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
