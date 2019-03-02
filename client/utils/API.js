import axios from "axios";

export default {
  // Gets all wine
  getWine: function() {
    return axios.get("/api/wine");
  },
  // Gets the book with the given id
  getWine: function(id) {
    return axios.get("/api/wine/" + id);
  }
};