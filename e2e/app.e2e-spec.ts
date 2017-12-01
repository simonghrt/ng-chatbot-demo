import { NgxChatSimplePage } from './app.po';

describe('ngx-chat-simple App', () => {
  let page: NgxChatSimplePage;

  beforeEach(() => {
    page = new NgxChatSimplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
