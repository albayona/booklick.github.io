import { ResidentNamePipe } from './resident-name.pipe';

describe('ResidentNamePipe', () => {
  it('create an instance', () => {
    const pipe = new ResidentNamePipe();
    expect(pipe).toBeTruthy();
  });
});
