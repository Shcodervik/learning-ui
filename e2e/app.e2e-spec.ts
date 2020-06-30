import { LearningUiPage } from './app.po';

describe('learning-ui App', () => {
  let page: LearningUiPage;

  beforeEach(() => {
    page = new LearningUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
