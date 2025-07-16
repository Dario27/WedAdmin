import { useState, useMemo } from 'react';

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Table } from 'react-bootstrap';

const defaultData = [
  {
        name: 'Imelda Hardin',
        age: 39,
        address: '719-7009 Auctor Av',
        country: 'Brazil  ',
      },{
        name: 'Herman Rosa',
        age: 49,
        address: '718-7162 Molestie Av.',
        country: 'Russia  ',
      },{
        name: 'Jonah Johns',
        age: 28,
        address: 'P.O. Box 939, 9310 A Ave',
        country: 'Brazzil  ',
      },{
        name: 'Otto Clay',
        age: 61,
        address: 'Ap #897-1459 Quam Avenue',
        country: 'China ',
      }
      ,{
        name: 'Connor Johnston',
        age: 71,
        address: 'Ap #370-4647 Dis Av.',
        country: 'Russia ',
      }
      ,{
        name: 'Lacey Hess',
        age: 29,
        address: 'Ap #365-8835 Integer St.',
        country: 'Russia ',
      }
      ,{
        name: 'Timothy Henson',
        age: 78,
        address: '911-5143 Luctus Ave',
        country: 'US ',
      }
      ,{
        name: 'Ramona Benton',
        age: 44,
        address: 'Ap #614-689 Vehicula Street',
        country: 'Brazil ',
      },{
        name: 'Ezra Tillman',
        age: 51,
        address: 'P.O. Box 738, 7583 Quisque St.',
        country: 'Us ',
      }
      ,{
        name: 'Dante Carter',
        age: 59,
        address: 'P.O. Box 976, 6316 Lorem, St.',
        country: 'US ',
      },{
        name: 'Christopher Mcclure',
        age: 58,
        address: '847-4303 Dictum Av.',
        country: 'China ',
      }
      ,{
        name: 'Ruby Rocha',
        age: 62,
        address: '5212 Sagittis Ave',
        country: 'Canada ',
      }
      ,{
        name: 'Imelda Hardin',
        age: 39,
        address: '719-7009 Auctor Av.',
        country: 'Brazil',
      }
      ,{
        name: 'Jonah Johns',
        age: 26,
        address: 'P.O. Box 939, 9310 A Ave',
        country: 'Brazil ',
      },{
        name: 'Herman Rosa',
        age: 49,
        address: '718-7162 Molestie Av.',
        country: 'Russia  ',
      },{
        name: 'Jonah Johns',
        age: 28,
        address: 'P.O. Box 939, 9310 A Ave',
        country: 'Brazzil  ',
      },{
        name: 'Otto Clay',
        age: 61,
        address: 'Ap #897-1459 Quam Avenue',
        country: 'China ',
      }
      ,{
        name: 'Connor Johnston',
        age: 71,
        address: 'Ap #370-4647 Dis Av.',
        country: 'Russia ',
      }
      ,{
        name: 'Lacey Hess',
        age: 29,
        address: 'Ap #365-8835 Integer St.',
        country: 'Russia ',
      }
      ,{
        name: 'Timothy Henson',
        age: 78,
        address: '911-5143 Luctus Ave',
        country: 'US ',
      }
      ,{
        name: 'Ramona Benton',
        age: 44,
        address: 'Ap #614-689 Vehicula Street',
        country: 'Brazil ',
      },{
        name: 'Ezra Tillman',
        age: 51,
        address: 'P.O. Box 738, 7583 Quisque St.',
        country: 'Us ',
      }
      ,{
        name: 'Dante Carter',
        age: 59,
        address: 'P.O. Box 976, 6316 Lorem, St.',
        country: 'US ',
      },{
        name: 'Christopher Mcclure',
        age: 58,
        address: '847-4303 Dictum Av.',
        country: 'China ',
      }
      ,{
        name: 'Ruby Rocha',
        age: 62,
        address: '5212 Sagittis Ave',
        country: 'Canada ',
      }
      ,{
        name: 'Imelda Hardin',
        age: 39,
        address: '719-7009 Auctor Av.',
        country: 'Brazil',
      }
      ,{
        name: 'Jonah Johns',
        age: 26,
        address: 'P.O. Box 939, 9310 A Ave',
        country: 'Brazil ',
      }
];



// const columns = [
//   columnHelper.accessor('name', {
//     id: 'lastName',
//     cell: info => <i>{info.getValue()}</i>,
//     header: () => <span> Name</span>,
//     footer: info => info.column.id,
//   }),
//   columnHelper.accessor('age', {
//     header: () => 'Age',
//     cell: info => info.renderValue(),
//     footer: info => info.column.id,
//   }),
//   columnHelper.accessor('addresss', {
//     header: () => <span>Address</span>,
//     footer: info => info.column.id,
//   }),
//   columnHelper.accessor('country', {
//     header: 'Country',
//     footer: info => info.column.id,
//   }),

// ];


function ReactTable() {


    const columns = useMemo(
    () => [
      // {
      //   accessorKey: 'Name',
      //   cell: info => info.getValue(),
      //   footer: props => props.column.id,
      // },
      {
        accessorKey: 'name',
        header: () => 'Name',
        // footer: props => props.column.id,
      },
      // {
      //   accessorFn: row => row.lastName,
      //   id: 'lastName',
      //   cell: info => info.getValue(),
      //   header: () => <span>Last Name</span>,
      //   footer: props => props.column.id,
      // },
      {
        accessorKey: 'age',
        enableResizing: true,
        header: () => 'Age',
        filterFn: (row, columnId, filterValue) => {
          if (!filterValue) return true;
          const age = row.getValue(columnId);
          const minAge = Math.max(1, parseInt(filterValue) || 1);
          return age >= minAge;
        }
      },
      {
        accessorKey: 'address',
        header: () => <span>Addresss</span>,
        // footer: props => props.column.id,
      },
      {
        accessorKey: 'isMarried',
        header: () => "Is Married",
        cell: ({row}) => {
          return (
            <div className='form-check'>
              <label className="form-check-label text-muted">
                <input type="checkbox" className="form-check-input"/>
                <i className="input-helper"></i>
              </label>
            </div>
          )
        }
        
      },
      {
        accessorKey: 'country',
        header: 'Country',
        // footer: props => props.column.id,
      },
      // {
      //   accessorKey: 'progress',
      //   header: 'Profile Progress',
      //   footer: props => props.column.id,
      // },
    ],
    []
  );


  const [data, setData] = useState(() => [...defaultData]);
  // const rerender = useReducer(() => ({}), {})[1];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">React Table</h4>
              <div className="row">
                <div className="col-12">
                   <div className="p-2">
                    <MyTable data={data} columns={columns}/>
                  </div>                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MyTable({ data, columns }) {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    columns,
    data,
    debugTable: true,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });

  return (
    <div className="p-2">
      <div className="h-2" />
      <Table bordered>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} colSpan={header.colSpan}>
                  <div
                    className={header.column.getCanSort() ? 'cursor-pointer select-none' : ''}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {{
                      asc: ' 🔼',
                      desc: ' 🔽',
                    }[header.column.getIsSorted()] ?? null}
                    {header.column.getCanFilter() ? (
                      <div>
                        {/* <Filter column={header.column} table={table} /> */}
                      </div>
                    ) : null}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
            <th key={header.id}>
              <div>
                <Filter column={header.column} table={table} />
              </div>
            </th>
            ))}
          </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="h-2" />
      <div className="d-flex justify-content-between pagination mt-3">
        {/* <button
          className="border rounded p-1"
          onClick={() => table.firstPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {'<<'}
        </button> */}
        <div className='previous'>
          <button
            className="btn"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {'Previous'}
          </button>
        </div>
        <div className='center'>
          <span className="flex items-center gap-1 page-info">
            Page 
            <input type="number" value={table.getState().pagination.pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Math.min(Number(e.target.value), 3) -1 : 0
              table.setPageIndex(page)
            }}
            className='border p-1 rounded m-2 bg-transparent text-light'
            />
            <strong>
              {/* {table.getState().pagination.pageIndex + 1} */}
               of{' '}
              {table.getPageCount().toLocaleString()}
            </strong>
          </span>
          <select className='pageSizeOptions bg-transparent text-light ms-2'
            value={table.getState().pagination.pageSize}
            onChange={e => {
              table.setPageSize(Number(e.target.value));
            }}
            >
            {[10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
        <div className='next'>
        <button
          className="btn"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {'Next'}
        </button>
        </div>
      </div>
    </div>
  );
}


function Filter({ column, table }) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id);

  const columnFilterValue = column.getFilterValue();

  if (column.id === 'age') {
    return (
      <input
        type="number"
        value={columnFilterValue ?? ''}
        onChange={e => {
          const value = e.target.value ? Math.max(1, parseInt(e.target.value)) : '';
          column.setFilterValue(value);
        }}
        min="1"
        placeholder="Min age..."
        className="filter"
        onClick={e => e.stopPropagation()}
      />
    );
  }

  return typeof firstValue === 'number' ? (
    <div className="flex space-x-2" onClick={e => e.stopPropagation()}>
      {/* <input
        type="number"
        value={(columnFilterValue)?.[0] ?? ''}
        onChange={e =>
          column.setFilterValue((old) => [
            e.target.value,
            old?.[1],
          ])
        }
        placeholder={`Min`}
        className="w-24 border shadow rounded"
      /> */}
      <input
        type="number"
        value={(columnFilterValue)?.[1] ?? ''}
        onChange={e =>
          column.setFilterValue((old) => [
            old?.[0],
            e.target.value,
          ])
        }
        placeholder={`Max`}
        className="filter"
      />
    </div>
  ) : (
    <input
      className="filter"
      onChange={e => column.setFilterValue(e.target.value)}
      onClick={e => e.stopPropagation()}
      // placeholder={`Search...`}
      type="text"
      value={(columnFilterValue ?? '')}
    />
  );
}


export default ReactTable