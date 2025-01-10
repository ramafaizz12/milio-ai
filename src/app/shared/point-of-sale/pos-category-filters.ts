import { atom } from 'jotai';

// Atom untuk menyimpan kategori yang dipilih
export const selectedCategoryAtom = atom<string | null>(null);
