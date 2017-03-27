import { TimerRoutingPage } from './app.po';

describe('timer-routing App', () => {
  let page: TimerRoutingPage;

  beforeEach(() => {
    page = new TimerRoutingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
