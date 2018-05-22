const log = function (driver) {
  console.log(driver.name);
};
const logDriverNames = function (drivers) {
  drivers.forEach(log);
};

const logDriversByHometown = function (drivers, location) {
  const selectDrivers = drivers.filter(function (driver) {return driver.hometown == location ;});
  
  selectDrivers.forEach(log);
};

const revenueSorter = function (driver1, driver2) {
  return driver1.revenue - driver2.revenue;
};

const driversByRevenue = function (drivers) {
  return drivers.slice().sort(revenueSorter);
};

const nameSorter = function (driver1, driver2) {
  return driver1.name.localeCompare(driver2.name);
};

const driversByName = function (drivers) {
  return drivers.slice().sort(nameSorter);
};

const reduceDriverRevenue = function (agg, el, i, arr) {
  return agg + el.revenue;
};

const totalRevenue = function (drivers) {
  return drivers.reduce(reduceDriverRevenue, 0);
};

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
}
