import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ticketTypes: [],
  },
  mutations: {
    setTicketTypes(state, payload) {
      state.ticketTypes = payload;
    },
  },
  getters:{
ticketTypes: state => state.ticketTypes
  },
  actions: {
    setTicketTypes({ commit }, payload) {
      const finalPayload = payload.map((item) => {
        item["count"] = 0;
        return item;
      });
      commit("setTicketTypes", finalPayload);
    },
    // Find ticket type by it's ID and increment the count
    decrementTicketType({ commit }, ticket_id) {
      const finalPayload = this.state.ticketTypes.map((item) => {
        if (item.id === ticket_id) {
          if (item.count === 0) {
            return item; 
          }
          item.count--;
        }
        return item;
      });
      commit("setTicketTypes", finalPayload);
    },
    incrementTicketType({ commit }, ticket_id) {
      const finalPayload = this.state.ticketTypes.map((item) => {
        if (item.id === ticket_id) {
          if (item.count === item.qty_available) {
            return item;
          }
          item.count++;
        }
        return item;
      });
      commit("setTicketTypes", finalPayload);
    },
  },
  modules: {},
});
