import axios from "axios";

export default {
  // Gets all wine
  getWines: function() {
    return axios.get("/api/wine");
  },
  // Gets the wine with the given id
  getWine: function(id) {
    return axios.get("/api/wine/" + id);
  },
  // Deletes the book with the given id
  // deleteWine: function(id) {
  //   return axios.delete("/api/wine/" + id);
  // },
  // Saves a book to the database
  saveWine: function(wineData) {
    return axios.post("/api/wine", wineData);
  }
};