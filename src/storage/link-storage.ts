import AsyncStorage from "@react-native-async-storage/async-storage";

const LINKS_STORAGE_KEY = "links-storage";

export type LinkStorage = {
  id: string;
  name: string;
  url: string;
  category: string;
};

async function get(): Promise<LinkStorage[]> {
  //Recupera as informações passadas pelo usuário ou ja existentes.
  const storage = await AsyncStorage.getItem(LINKS_STORAGE_KEY);
  const response = storage ? JSON.parse(storage) : [];

  return response;
}

async function save(newLink: LinkStorage) {
  //Salva as informações novas
  try {
    const storage = await get();
    const updated = JSON.stringify([...storage, newLink]);

    await AsyncStorage.setItem(LINKS_STORAGE_KEY, updated);
  } catch (error) {
    throw error;
  }
}

async function remove(id: string) {
  try {
    const storage = await get()
    const updated = storage.filter((link) => link.id !== id)

    await AsyncStorage.setItem(LINKS_STORAGE_KEY, JSON.stringify(updated))

  } catch (error) {
    throw error;
  }
}

export const linkStorage = { get, save, remove };
