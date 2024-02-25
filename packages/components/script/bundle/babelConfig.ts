export default {
  presets: [
    [
      require.resolve('@babel/preset-env'),
      {
        modules: false,
      },
    ],
    require.resolve('@babel/preset-typescript'),
  ],
}
