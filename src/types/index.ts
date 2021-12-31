// types

// products types
export interface ProductItemsProps {
   id: number;
   name: string;
   quantity: number;
}

export interface ProductProps {
   product: ProductItemsProps;
}

export interface ProductsState {
   products: string []
}

// cart types
export interface CartState {
   cart: string []
}

// notes types
export interface NotesState {
   notes: string[]
}
export interface NewNoteInputProps {
   addNote(note: string): void;
}