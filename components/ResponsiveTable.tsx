
import React from 'react';

interface ResponsiveTableProps {
  headers: string[];
  data: (string | number | React.ReactNode)[][];
}

export const ResponsiveTable: React.FC<ResponsiveTableProps> = ({ headers, data }) => {
  return (
    <div className="overflow-x-auto shadow-md rounded-lg my-4">
      <table className="w-full text-left text-gray-700">
        <thead className="text-xs uppercase bg-green-600 text-white">
          <tr>
            {headers.map((header, index) => (
              <th key={index} scope="col" className="px-4 py-2 sm:px-6 sm:py-3 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className={`${rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b hover:bg-gray-100 transition-colors duration-200`}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-4 py-2 sm:px-6 sm:py-3 whitespace-pre-wrap text-sm" // whitespace-pre-wrap for line breaks in content
                  data-label={headers[cellIndex]} // For mobile responsiveness with data-label
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};