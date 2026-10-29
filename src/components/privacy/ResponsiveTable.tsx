'use client';

import React from 'react';
import { TableData } from '@/content/privacyPolicyData';
import { renderWithPlaceholders } from './Placeholder';

interface ResponsiveTableProps {
  data: TableData;
}

export function ResponsiveTable({ data }: ResponsiveTableProps) {
  const { headers, rows } = data;

  return (
    <div className="w-full my-4">
      {/* Desktop / Tablet View (>= 640px) */}
      <div className="hidden sm:block w-full overflow-hidden rounded-2xl frosted-glass border border-blue-500/25 bg-[#0B1630]/60 shadow-lg">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="border-b border-blue-500/20 bg-blue-500/10">
              {headers.map((header, idx) => (
                <th
                  key={idx}
                  scope="col"
                  className="px-5 py-3.5 font-mono text-[12px] uppercase tracking-wider text-ice-cyan font-bold"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-blue-500/15">
            {rows.map((row, rowIdx) => (
              <tr key={rowIdx} className="hover:bg-blue-500/5 transition-colors">
                {row.map((cell, cellIdx) => (
                  <td
                    key={cellIdx}
                    className={`px-5 py-4 leading-relaxed ${
                      cellIdx === 0
                        ? 'font-medium text-surface-text font-display'
                        : 'text-muted-text text-[13px] sm:text-[14px]'
                    }`}
                  >
                    {renderWithPlaceholders(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Stacked Card View (< 640px) */}
      <div className="sm:hidden flex flex-col gap-3.5 w-full">
        {rows.map((row, rowIdx) => (
          <div
            key={rowIdx}
            className="p-4 rounded-xl frosted-glass border border-blue-500/20 bg-[#0B1630]/80 flex flex-col gap-2.5 text-xs"
          >
            {row.map((cell, cellIdx) => (
              <div key={cellIdx} className="flex flex-col gap-0.5">
                <span className="font-mono text-[10px] uppercase tracking-wider text-ice-cyan/90 font-semibold">
                  {headers[cellIdx] || `Field ${cellIdx + 1}`}
                </span>
                <div className={`leading-relaxed ${
                  cellIdx === 0 ? 'text-surface-text font-semibold text-sm' : 'text-muted-text'
                }`}>
                  {renderWithPlaceholders(cell)}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
