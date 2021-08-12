import React, { useState, useEffect, useMemo, useRef, component } from "react";
import CarDataService from "../services/CarService";
import { useTable } from "react-table";
import Histogram from 'react-chart-histogram';
//import Histogram_local from "./Histogram_local";

// import { Histogram } from 'graphics-canvas';
// import 'graphics-canvas/src/piechart.scss' ;// optional if you`ll use your css

const CarsList = (props) => {
  const [cars, setCars] = useState([]);
  const [searchMake, setSearchMake] = useState("");

  const carsRef = useRef();

  carsRef.current = cars;

  useEffect(() => {
    retrieveCars();
  }, []);

  const onChangeSearchMake = (e) => {
    const searchMake = e.target.value;
    setSearchMake(searchMake);
  };

  const retrieveCars = () => {
    CarDataService.getAll()
      .then((response) => {
        console.log("line 28 from CarList.js ", response.data);
        setCars(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveCars();
  };

  const removeAllCars = () => {
    CarDataService.removeAll()
      .then((response) => {
        console.log(response.data);
        refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const findByMake = () => {
    CarDataService.findByMake(searchMake)
      .then((response) => {
        setCars(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const openCar = (rowIndex) => {
    const id = carsRef.current[rowIndex].id;

    props.history.push("/cars/" + id);
  };

  const deleteCar = (rowIndex) => {
    const id = carsRef.current[rowIndex].id;

    CarDataService.remove(id)
      .then((response) => {
        props.history.push("/cars");

        let newCars = [...carsRef.current];
        newCars.splice(rowIndex, 1);

        setCars(newCars);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const columns = useMemo(
    () => [
      {
        Header: "Make",
        accessor: "make",
      },
      {
        Header: "Model",
        accessor: "model",
      },
      {
        Header: "Year",
        accessor: "year",
      },
      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Actions",
        accessor: "actions",
        Cell: (props) => {
          const rowIdx = props.row.id;
          return (
            <div>
              <span onClick={() => openCar(rowIdx)}>
                <i className="far fa-edit action mr-2"></i>
              </span>

              <span onClick={() => deleteCar(rowIdx)}>
                <i className="fas fa-trash action"></i>
              </span>
            </div>
          );
        },
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data: cars,
  });

  console.log("line 139 of CarList.js  ", cars);
  // from 'cars', count by status='Live' or 'Sold', save to const data = []

  const countSold = cars.filter((obj) => obj.status === 'Sold').length;
  const countLive = cars.filter((obj) => obj.status === 'Live').length;

  // console.log("countSold, countLive", countSold, countLive)

  const labels = ['Sold', 'Live'];
  const data = [countSold, countLive];
  // const data = [50,100];
  // const options = { fillColor: '#FFFFFF', strokeColor: '#0000FF' };
const options = { fillColor: '#314deb', strokeColor: '#0000FF', scaleFontSize: 12, scaleFontStyle: "bold" };
  

  //************************************************************************ 
  //************************************************************************ */
  
  // const data = [
  //   {
  //     label: 'Sold',
  //     values: [
  //       {
  //         title: 'Sold',
  //         count: countSold
  //       }
  //     ]
  //   },
  //   {
  //     label: 'Live',
  //     values: [
  //       {
  //         title: 'Live',
  //         count: countLive
  //       }
  //     ]
  //   }
  // ]

  // // You can provide colors or it`ll be by default
  // const colors = [
  //   '#00B275'
  // ]





  //************************************************************************ */

  return (
    //console.log("out........",retrieveCars ),
    <div>
      <div>
        <Histogram
          xLabels={labels}
          yValues={data}
          width='400'
          height='200'
          options={options}
        />
        </div>
      {/* <div>
        <Histogram
          containerClass={"histogramContainer"} // Histogram container class (optional)
          colors={colors} // Provide you colors (optional)
          background={'White'} // Background color (optional)
          data={data} // Data (required)
          range={0} // Bodred-radius of columns (optional)
          columnWidth={200} // Column width (optional)
          columnMargin={5} // Column margin (optional)
          fontFamily={'Arial'} // Font family (you need link font in your css)
          fontSize={14} // Text font size
        />
      </div> */}

      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by make"
              value={searchMake}
              onChange={onChangeSearchMake}
            />

            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={findByMake}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-12 list">
          <table
            className="table table-striped table-bordered"
            {...getTableProps()}
          >
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, i) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )


};

export default CarsList;
