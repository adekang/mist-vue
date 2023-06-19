import { Command } from 'commander'
import { onCreate } from './command/create'

// 创建命令行程序
const program = new Command()

// 注册命令、参数、以及用户输入的回调
// 注册命令
program
  .command('create')
  .description('创建一个组件的模板或配置文件')
// 添加命令参数-t| -- type, <type>表明为必选参数 [type]表明为可选参数
  .option('-t, --type <type>', '创建类型，可选值为：component, lib-entry')
  .action(onCreate)

// 解析用户输入的参数
program.parse()
