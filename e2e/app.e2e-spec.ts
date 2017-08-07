import { Angular2DropdownMultiselectPage } from './app.po';

describe('angular2-dropdown-multiselect App', () => {
  let page: Angular2DropdownMultiselectPage;

  beforeEach(() => {
    page = new Angular2DropdownMultiselectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
