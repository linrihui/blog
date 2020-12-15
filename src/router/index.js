import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'


/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: {title: '工作台', icon: 'dashboard', affix: true}
    }]
  },

  // 博客管理
  {
    path: '/blog',
    component: Layout,
    redirect: '/blog/article',
    name: 'Blog',
    meta: {title: '博客管理', icon: 'el-icon-notebook-2'},
    children: [
      {
        path: 'article',
        name: 'Article',
        component: () => import('@/views/article/index'),
        meta: {title: '文章管理', icon: 'el-icon-notebook-1'}
      },
      {
        path: 'category',
        name: 'Category',
        component: () => import('@/views/category/index'),
        meta: {title: '分类管理', icon: 'el-icon-s-order'}
      },
      {
        path: 'label',
        name: 'Label',
        component: () => import('@/views/label/index'),
        meta: {title: '标签管理', icon: 'el-icon-collection-tag'}
      }
    ]
  },
// 广告管理
  {
    path: '/advert',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Advert',
        component: () => import('@/views/advert/index'),
        meta: {title: '广告管理', icon: 'el-icon-picture-outline-round'}
      }
    ]
  },
// 系统管理
  {
    path: '/system',
    component: Layout,
    redirect: '/system/user',
    name: 'System',
    meta: {title: '系统管理', icon: 'el-icon-setting'},
    children: [
      {
        path: 'user',
        name: 'User',
        component: () => import('@/views/user/index'),
        meta: {title: '用户管理', icon: 'el-icon-user-solid'}
      },
      {
        path: 'role',
        name: 'Role',
        component: () => import('@/views/role/index'),
        meta: {title: '角色管理', icon: 'el-icon-coin'}
      },
      {
        path: 'menu',
        name: 'Menu',
        component: () => import('@/views/menu/index'),
        meta: {title: '菜单管理', icon: 'el-icon-menu'}
      }
    ]
  },
  // 标签导航刷新
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  // 404 page must be placed at the end !!!
  {path: '*', redirect: '/404', hidden: true}
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({y: 0}),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
