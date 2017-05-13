import { GohA2Page } from './app.po';

describe('goh-a2 App', () => {
  let page: GohA2Page;

  beforeEach(() => {
    page = new GohA2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
