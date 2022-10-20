import { Commit } from 'vuex'
interface dataMarketplaces {
  id: string
  name: string
}

const state = {
  marketplaces: [{ name: "Esmalteria D'Luxo", id: '001ABC' }],
}

const mutations = {
  SET_ALL_MARKETPLACE: (
    state: { marketplaces: dataMarketplaces[] },
    marketplaces: dataMarketplaces[]
  ): void => {
    state.marketplaces = marketplaces
  },
  SET_MARKETPLACE: (
    state: { marketplaces: dataMarketplaces[] },
    marketplace: dataMarketplaces
  ): void => {
    state.marketplaces.push(marketplace)
  },
}

const actions = {
  setMarketplace: ({ commit }: { commit: Commit }, marketplace: any) =>
    commit('SET_MARKETPLACE', marketplace),
  setAllMarketplace: (
    { commit }: { commit: Commit },
    marketplaces: dataMarketplaces[]
  ) => commit('SET_ALL_MARKETPLACE', marketplaces),
}

export default { state, mutations, actions }
