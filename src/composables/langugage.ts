// TODO: 改成 RFC 1766 標準
// import ISO6391 from 'iso-639-1';

export const languagesNameList: {
  code: string;
  nativeName: string;
  name: string;
}[] = [
  {
    code: 'en-us',
    nativeName: 'English',
    name: 'English',
  },
  {
    code: 'zh-tw',
    nativeName: '繁中',
    name: 'Traditional Chinese',
  },
];

// export const languagesNameList: {
//   code: string;
//   nativeName: string;
//   name: string;
// }[] = ISO6391.getAllCodes().map(code => ({
//   code,
//   nativeName: ISO6391.getNativeName(code),
//   name: ISO6391.getName(code),
// }));
