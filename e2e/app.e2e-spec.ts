import { Shoppinglist2angularPage } from './app.po';

describe('shoppinglist2angular App', () => {
  let page: Shoppinglist2angularPage;

  beforeEach(() => {
    page = new Shoppinglist2angularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
