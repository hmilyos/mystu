import { MystuPage } from './app.po';

describe('mystu App', () => {
  let page: MystuPage;

  beforeEach(() => {
    page = new MystuPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
