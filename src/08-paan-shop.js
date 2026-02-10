export function createPaanOrder(basePaan, customizations) {
  if (typeof basePaan !== 'object' || basePaan === null || Array.isArray(basePaan)) return {};
  if (typeof customizations !== 'object' || customizations === null || Array.isArray(customizations)) {
    return { ...basePaan };
  }
  return { ...basePaan, ...customizations };
}

export function freezeMenu(menu) {
  if (typeof menu !== 'object' || menu === null || Array.isArray(menu)) return {};
  return Object.freeze(menu);
}

export function updatePrices(menu, increase) {
  if (typeof menu !== 'object' || menu === null || Array.isArray(menu)) return {};
  if (typeof increase !== 'number') return {};
  const updatedEntries = Object.entries(menu).map(([key, price]) => [key, price + increase]);
  return Object.fromEntries(updatedEntries);
}

export function mergeDailySpecials(regularMenu, specialsMenu) {
  const base = typeof regularMenu === 'object' && regularMenu !== null && !Array.isArray(regularMenu) ? regularMenu : {};
  const specials = typeof specialsMenu === 'object' && specialsMenu !== null && !Array.isArray(specialsMenu) ? specialsMenu : {};
  return { ...base, ...specials };
}
