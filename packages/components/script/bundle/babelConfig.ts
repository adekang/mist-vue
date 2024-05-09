export default {
  presets: [
    [
      require.resolve('@babel/preset-env'),
      {
        modules: true,
      },
    ],
    require.resolve('@babel/preset-typescript'),
  ],
}
