export default function genBaseStyleTemplate(name: string) {
  return `\
@import '../../style/variable.scss';

@mixin ${name}-base {
  all:unset;
  /* your component style */

}
`
}
