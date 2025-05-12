import React, { useState, useEffect } from 'react';
import { fetchTransactionData } from '../utils/api';
import { TransactionData } from '../types';
import { BarChart, DollarSign, TrendingUp, TrendingDown, Loader } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const [data, setData] = useState<TransactionData[]>([]);
  const [totalIncome, setTotalIncome] = useState<number>(0);
  const [totalSpending, setTotalSpending] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetchTransactionData();
        setData(response.data);
        setTotalIncome(response.totalIncome);
        setTotalSpending(response.totalSpending);
        setError(null);
      } catch (err) {
        setError('Failed to load data. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    
    // Refresh data every 5 minutes
    const intervalId = setInterval(fetchData, 5 * 60 * 1000);
    
    return () => clearInterval(intervalId);
  }, []);

  // Format currency as Indonesian Rupiah
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <section id="transparency" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Transparency Dashboard
          </h2>
          <div className="w-24 h-1 bg-secondary-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Full transparency in our operations and finances is core to our mission.
            Below is our live financial data, updated automatically.
          </p>
        </div>

        {/* Financial summary cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 reveal-on-scroll">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary-500">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-700">Total Balance</h3>
              <DollarSign className="text-primary-500" size={24} />
            </div>
            <p className="text-3xl font-bold text-gray-800">
              {loading ? (
                <span className="flex items-center">
                  <Loader className="animate-spin mr-2" size={20} />
                  Loading...
                </span>
              ) : (
                formatCurrency(totalIncome - totalSpending)
              )}
            </p>
            <p className="text-sm text-gray-500 mt-2">Current funds available</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-accent-500">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-700">Total Income</h3>
              <TrendingUp className="text-accent-500" size={24} />
            </div>
            <p className="text-3xl font-bold text-gray-800">
              {loading ? (
                <span className="flex items-center">
                  <Loader className="animate-spin mr-2" size={20} />
                  Loading...
                </span>
              ) : (
                formatCurrency(totalIncome)
              )}
            </p>
            <p className="text-sm text-gray-500 mt-2">Revenue from waste sales</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-secondary-500">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-700">Total Spending</h3>
              <TrendingDown className="text-secondary-500" size={24} />
            </div>
            <p className="text-3xl font-bold text-gray-800">
              {loading ? (
                <span className="flex items-center">
                  <Loader className="animate-spin mr-2" size={20} />
                  Loading...
                </span>
              ) : (
                formatCurrency(totalSpending)
              )}
            </p>
            <p className="text-sm text-gray-500 mt-2">Investments in equipment</p>
          </div>
        </div>

        {/* Transaction Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden reveal-on-scroll">
          <div className="p-4 bg-gray-50 border-b flex justify-between items-center">
            <h3 className="font-semibold text-gray-700 flex items-center">
              <BarChart className="mr-2 text-secondary-500" size={20} />
              Transaction History
            </h3>
            <span className="text-sm text-gray-500">Auto-updating from Google Sheets</span>
          </div>
          
          {loading ? (
            <div className="py-16 text-center">
              <Loader className="inline-block animate-spin text-primary-500 mb-4" size={40} />
              <p className="text-gray-500">Loading transaction data...</p>
            </div>
          ) : error ? (
            <div className="p-8 text-center">
              <p className="text-red-500">{error}</p>
              <button 
                className="mt-4 px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors"
                onClick={() => window.location.reload()}
              >
                Try Again
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                        No transaction data available
                      </td>
                    </tr>
                  ) : (
                    data.map((transaction, index) => (
                      <tr 
                        key={index}
                        className={transaction.type === 'Income' ? 'bg-green-50' : 'bg-red-50'}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            transaction.type === 'Income' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {transaction.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {transaction.numberOfItems}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <span className={transaction.type === 'Income' ? 'text-green-600' : 'text-red-600'}>
                            {formatCurrency(transaction.amount)}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {transaction.description}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="text-center mt-8 text-sm text-gray-500 reveal-on-scroll">
          <p>Last updated: {new Date().toLocaleString()}</p>
        </div>
      </div>
    </section>
  );
};
