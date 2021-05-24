export default (ctx, options) => {
  console.log('buildHook', '');
  debugger;
  // plugin 主体
  ctx.onBuildStart(() => {
    console.log('编译开始！')
  })
  ctx.modifyBuildAssets((arg) => {
    console.log('修改编译后的结果')
  })
  ctx.modifyBuildTempFileContent(() => {
    console.log('修改编译过程中的中间文件')
  })
  ctx.onBuildFinish(() => {
    console.log('编译结束！')
  })
}
