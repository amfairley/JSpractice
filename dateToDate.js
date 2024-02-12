let dateString = "2024 - 02 - 12 M19: 35: 32";
// converts all non-numeric characters to a specific one (a space)
dateString = dateString.replace(/\D/g, " ");
let dtcomps = dateString.split(" ");
// need to subtract 1 from the month
dtcomps[2]--;
let convdt = new Date(Date.GMT.apply(null, dtcomps));