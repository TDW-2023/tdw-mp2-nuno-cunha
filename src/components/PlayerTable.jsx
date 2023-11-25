import { DataGrid } from "@mui/x-data-grid";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 200 },
  { field: "lastName", headerName: "Last name", width: 200 },
  { field: "age", headerName: "Age", width: 100 },
  { field: "position", headerName: "Position", width: 100 },
  { field: "rating", headerName: "Rating", width: 100 },
  { field: "gender", headerName: "Gender", width: 100 },
  { field: "nation", headerName: "Nation", width: 150 },
  { field: "league", headerName: "League", width: 200 },
  { field: "club", headerName: "Club", width: 200 },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 12345678 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 10, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function PlayerTable() {
  const handleRowClick = (params) => {
    console.log(params.row);
  };

  return (
    <TableContainer
      component={Paper}
      sx={{ borderRadius: "10px", height: "35vw" }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 20 },
          },
        }}
        onRowClick={handleRowClick}
        pageSizeOptions={[20]}
      />
    </TableContainer>
  );
}