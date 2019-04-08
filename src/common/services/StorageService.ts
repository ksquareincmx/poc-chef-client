export const storageService = {
  getItem: (itemName: string) => {
    const data = JSON.parse(localStorage.getItem(itemName) as string) || "";
    return data;
  },
  setItem: (name: string, info: any) => {
    localStorage.setItem(name, JSON.stringify(info));
  },
  removeItem: (nameItem: string) => {
    localStorage.removeItem(nameItem);
  }
};
