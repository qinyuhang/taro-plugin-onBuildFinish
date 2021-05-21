export default (ctx, options) => {
  console.log('buildHook', '');
  debugger;
  // plugin 主体
  ctx.onBuildStart(() => {
    console.log('编译开始！')
  })
  ctx.modifyBuildAssets((arg) => {
    console.log('try modifybuildassets')
  })
  ctx.onBuildFinish(() => {
    console.log('编译结束！')
  })
}
