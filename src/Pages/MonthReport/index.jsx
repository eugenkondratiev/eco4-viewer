import DataTable from 'react-data-table-component';
const columns = [
    {
        name: 'Title',
        selector: row => row.title,
    },
    {
        name: 'Year',
        selector: row => row.year,
    },
];

// eslint-disable-next-line react/prop-types
const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
]

const MonthReportPage = () => {
    return (
        <DataTable
            columns={columns}
            data={data}
            expandableRows
            expandableRowsComponent={ExpandedComponent}
        />
    );
};

export default MonthReportPage


