import { EcommerceUEBPage } from './app.po';

describe('ecommerce-ueb App', () => {
  let page: EcommerceUEBPage;

  beforeEach(() => {
    page = new EcommerceUEBPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
