export interface ISalesRecord {
  id: string;
  productName: string;
  productPrice: number;
  productQuantity: number;
}

export const salesRecords: ISalesRecord[] = [
  {
    id: "1",
    productName: "John Doe",
    productPrice: 200,
    productQuantity: 2,
  },
  {
    id: "2",
    productName: "Jane Doe",
    productPrice: 400,
    productQuantity: 3,
  },
  {
    id: "3",
    productName: "John Smith",
    productPrice: 300,
    productQuantity: 1,
  },
  {
    id: "4",
    productName: "Jane Smith",
    productPrice: 500,
    productQuantity: 2,
  },
];
