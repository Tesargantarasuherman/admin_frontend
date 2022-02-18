import React, { useState } from 'react'
import './index.css'
import Calendar from 'react-calendar';
import Chart from 'react-apexcharts';
import user from '../../img/user-man.png'
function Dashboard() {
  const [value, onChange] = useState(new Date());
  const series = [{
    name: 'New User',
    data: [3, 3, 4, 10, 4, 6, 2, 3, 14, 8, 5, 2]
  }];
  const options = {
    chart: {
      height: 350,
      type: 'bar',
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: 'top', // top, center, bottom
        },
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val;
      },
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ["#304758"]
      }
    },

    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      position: 'top',
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      crosshairs: {
        fill: {
          type: 'gradient',
          gradient: {
            colorFrom: '#D8E3F0',
            colorTo: '#BED1E6',
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          }
        }
      },
      tooltip: {
        enabled: true,
      }
    },
    yaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val;
        }
      }

    },
    title: {
      text: 'Monthly Report 2022',
      floating: true,
      offsetY: 330,
      align: 'center',
      style: {
        color: '#444'
      }
    }
  }
  return (
    <div className="body-dashboard">
      <div className="left-dashboard">
        <div className="left-dashboard-header">
          <h1>Dashboard</h1>
          <select name="" id="">
            <option value="">This Week</option>
          </select>
        </div>
        {/*  */}
        <div className="left-dashboard-body">
          <div className="row-card">
            {/* CARD */}
            <div className="card-default">
              <div className="bg-primary">
                <ion-icon name="people-outline"></ion-icon>
              </div>
              <div>
                <label>Total Student</label>
                <p>150</p>
              </div>
            </div>
            {/* CARD */}
            {/* CARD */}
            <div className="card-default">
              <div className="bg-primary">
                <ion-icon name="people-outline"></ion-icon>
              </div>
              <div>
                <label>Total Student</label>
                <p>150</p>
              </div>
            </div>
            {/* CARD */}
            {/* CARD */}
            <div className="card-default">
              <div className="bg-primary">
                <ion-icon name="people-outline"></ion-icon>
              </div>
              <div>
                <label>Total Student</label>
                <p>150</p>
              </div>
            </div>
            {/* CARD */}
            {/* CARD */}
            <div className="card-default">
              <div className="bg-primary">
                <ion-icon name="people-outline"></ion-icon>
              </div>
              <div>
                <label>Total Student</label>
                <p>150</p>
              </div>
            </div>
            {/* CARD */}
          </div>
        </div>
        {/*  */}
        <div className="row-chart">
          <div className="chart-activity">
            <label>User Overview</label>
            <Chart options={options} series={series} type="bar" height={350} />
          </div>
          <div className="chart-report">
            <label>Last Transaction</label>
            <table id="customers">
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Name Courses</th>
                <th>Date</th>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>200.000</td>
                <td>Golang</td>
                <td>20 February 2022</td>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>200.000</td>
                <td>React Js</td>
                <td>20 February 2022</td>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>200.000</td>
                <td>Docker</td>
                <td>20 February 2022</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className='right-dashboard'>
        <Calendar onChange={onChange} value={value} />
        <div className="last-active-user">
          <label htmlFor="">Last Active User</label>
          <div className="detail-last-active-user">
            <div className="card-last-active-user">
              <div>
                <img src={user} alt="" srcset="" />
              </div>
              <div>
                Tesar
              </div>
              <div>
                13:00,20 February 2022
              </div>
            </div>
            <div className="card-last-active-user">
              <div>
                <img src={user} alt="" srcset="" />
              </div>
              <div>
                Gantara
              </div>
              <div>
                13:00,20 February 2022
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard