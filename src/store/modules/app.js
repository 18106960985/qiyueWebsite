import Cookies from 'js-cookie'

const app = {
  state: {
    sidebar: {
      opened: false ,   // 菜单侧边栏 状态
      index: Cookies.get('sidebarIndex') || 0 //菜单索引
    },

    language: Cookies.get('language') || 'en'
  },
  mutations: {

    MENU_SIDEBAR: state => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', true)
      } else {
        Cookies.set('sidebarStatus', false)
      }
      state.sidebar.opened = !state.sidebar.opened
    },
    MENU_INDEX: (state,index)=>{
      state.sidebar.index = index;
      Cookies.set('sidebarIndex', index)

    },
    // 多语言预备
    SET_LANGUAGE: (state, language) => {
      state.language = language
      Cookies.set('language', language)
    }
  },
  actions: {
    toggleSideBar({ commit }) {
      commit('MENU_SIDEBAR')
    },
    setLanguage({ commit }, language) {
      commit('SET_LANGUAGE', language)
    },
    setMenuIndex({ commit }, index){
      commit('MENU_INDEX', index)
    }
  }
}

export default app
