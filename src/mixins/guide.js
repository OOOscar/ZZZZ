const steps = [
  {
    element: '#domSideBar',
    popover: {
      title: '菜单导航',
      description: '点击菜单可切换右侧菜单内容',
      position: 'bottom'
    },
    padding: 0
  },
  {
    element: '#domBread',
    popover: {
      title: '面包屑导航',
      description: '用于显示当前菜单的位置',
      position: 'bottom'
    }
  },
  {
    element: '#domMessage',
    popover: {
      title: '通知',
      description: '点击图标，右侧会显示通知消息',
      position: 'left'
    }
  },
  {
    element: '#domFullScreen',
    popover: {
      title: '全屏显示',
      description: '点击图标，放大全屏显示系统',
      position: 'left'
    }
  },
  {
    element: '#toIndex',
    popover: {
      title: '回到首页',
      description: '点击图标，回到首页',
      position: 'left'
    }
  },
  {
    element: '#loginOut',
    popover: {
      title: '登出',
      description: '点击图标，退出系统',
      position: 'left'
    }
  },

]
export default steps
