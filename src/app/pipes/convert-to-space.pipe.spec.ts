import { ConvertToSpacePipe } from './convert-to-space.pipe';

describe('ConvertToSpacePipe', () => {
  it('create an instance', () => {
    const pipe = new ConvertToSpacePipe();
    expect(pipe).toBeTruthy();
  });

  it('Given a string with single dash, return same string with space in place of the dash', () => {
    // given / arrange
    let input = 'Shirt-XXL';
    let charToReplace = '-';
    const pipe = new ConvertToSpacePipe();

    // when / act
    let res = pipe.transform(input, charToReplace);

    // then / assert
    expect(res).toBe('Shirt XXL');
  });

  it('Given a string with 2 subsequent dashes, return same string without with the last dash remaining', () => {
    // given
    let input = 'Shirt--XXL';
    let charToReplace = '-';
    const pipe = new ConvertToSpacePipe();

    // when
    let res = pipe.transform(input, charToReplace);

    // then
    expect(res).toBe('Shirt XXL');
  });

  // it('Given a string with N subsequent &&, return same string without with them', () => {
  //   // given
  //   let input = 'Shirt&&&&&&&XXL&';
  //   let charToReplace = '&';
  //   const pipe = new ConvertToSpacePipe();

  //   // when
  //   let res = pipe.transform(input, charToReplace);

  //   // then
  //   expect(res).toBe('Shirt XXL');
  // });
});
