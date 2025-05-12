export interface TransactionData {
  date: string;
  type: 'Income' | 'Spending';
  numberOfItems: number;
  amount: number;
  description: string;
}

export interface ApiResponse {
  data: TransactionData[];
  totalIncome: number;
  totalSpending: number;
}
