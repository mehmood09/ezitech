import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import axios from "axios";
import moment from 'moment'

export const BookingTable = () => {

    const columns = [
        {
          name: 'الاسم Name',
          selector: row => row.name,
          sortable: true,
        },
        {
          name: 'رقم الهؤيه CNIC',
          selector: row => row.cnic,
          sortable: true,
        },
        {
          name: 'التخصص Job',
          selector: row => row.jobdep,
          sortable: true,
        },
        {
          name: 'رقم الجوال Phone',
          selector: row => row.mobile,
          sortable: true,
        },
        {
          name: 'تاريخ اصدارالبطاقه Issue Date',
          selector: row => moment(row.idate).format('DD/MM/YYYY'),
          sortable: true,
        },
        {
          name: 'تاريخ الانتهاء Return Date',
          selector: row => moment(row.edate).format('DD/MM/YYYY'),
          sortable: true,
        },
           
      ];
      const [data, setData] = useState([]);
      const [search, setSearch]= useState('');
      const [filter, setFilter] = useState([]);

      //fetch('http://localhost:3000/api/patients').then(res => res.json()   const req = await fetch("http://localhost:4000/employee/").then(res => res.json());
      const getEmployeesss = async() => {
        try {
            const req = await fetch("https://faizan-production-employee.up.railway.app/booking/").then(res => res.json());
            //const res = await req.json();
            setData(res);
            setFilter(res);            
        } catch (error) {
            console.log(error);
        }
      }
      const getBooking = async() => {
        try {
            axios
            .get("http://localhost:4000/booking/")
            .then((res) => {
                setData(res.data.data);
                setFilter(res);
            })
            .catch((error) => {
                console.log(error);
            });
        } catch (error) {
            console.log(error);
        }
      }
      useEffect(() => {
        getBooking();
      }, []);
    
      useEffect(() => {
        const result = data.filter((item)=> {
            return item.name.toLowerCase().match(search.toLocaleLowerCase());
        });
        setFilter(result);
      }, [search]);
      
      const tableHeaderStyle = {
        headCells : {
          style : {
            fontWeight: "bold", fontSize:"14px", backgroundColor: "#000d6b", color: "#fff"
          },
        },
      }
  return (
    <React.Fragment>
        <DataTable
        title="Booking Details"
        customStyles={tableHeaderStyle}
        columns={columns}
        data={data}
        fixedHeader
        pagination
        highlightOnHover
        subHeader
        subHeaderComponent={
            <input type='text'
            className='w-25 form-control'
            placeholder='Search...'
            value={ search}
            onChange={(e)=>setSearch(e.target.value)}
            />
        }
        />
    </React.Fragment>
  )
}
export default BookingTable;