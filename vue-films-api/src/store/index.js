import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        films: []
    },
    mutations: {
        SET_FILM: (state, films) => {
            state.films = films
        }
    },
    actions: {
        GET_FILMS_FROM_API({ commit }) {
            return axios('https://floating-sierra-20135.herokuapp.com/api/movies', {
                    method: "GET"
                })
                .then((films) => {
                    commit('SET_FILM', films.data)
                    return films;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                })
        }
    },
    getter: {
        FILMS(state) {
            return state.films
        }
    },
    modules: {}
});