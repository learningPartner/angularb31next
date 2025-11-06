import { NullBlankPipe } from './null-blank-pipe';

xdescribe('NullBlankPipe', () => {
  it('create an instance', () => {
    const pipe = new NullBlankPipe();
    expect(pipe).toBeTruthy();
  });
});
