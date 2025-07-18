import {ProgressBar} from 'react-bootstrap'
import { Dropdown} from 'react-bootstrap'
import { Conversion, Downloads, Impressions, VisitsMini } from '../../components/charts/chartjs/dashboard/MiniLineCharts'
import SalesStatistics from '../../components/charts/chartjs/dashboard/SalesStatistics'
import NetProfit from '../../components/charts/chartjs/dashboard/NetProfit'
import TotalRevenue from '../../components/charts/chartjs/dashboard/TotalRevenue'
import Transaction from '../../components/charts/chartjs/dashboard/Transaction'
import MarketOverview from '../../components/charts/chartjs/dashboard/MarketOverview'
import WorldSelling from '../../components/maps/WorldSelling'
import GaugeChart from 'react-gauge-chart';
import RealTime from '../../components/charts/chartjs/dashboard/RealTime'

function Dashboard() {
  return (
    <div>
        <div className="row">
          <div className="col-md-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-xl-3 col-lg-6 col-sm-6 grid-margin-xl-0 grid-margin">
                    <div className="d-flex">
                      <div className="wrapper">
                        <h3 className="mb-0 fw-semibold">32,451</h3>
                        <h5 className="mb-0 fw-medium text-primary">Visits</h5>
                        <p className="mb-0 text-muted">+14.00(+0.50%)</p>
                      </div>
                      <div className="wrapper my-auto ms-auto ms-lg-4">
                        <VisitsMini />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-sm-6 mt-md-0 mt-4 grid-margin-xl-0 grid-margin">
                    <div className="d-flex">
                      <div className="wrapper">
                        <h3 className="mb-0 fw-semibold">15,236</h3>
                        <h5 className="mb-0 fw-medium text-primary">Impressions</h5>
                        <p className="mb-0 text-muted">+138.97(+0.54%)</p>
                      </div>
                      <div className="wrapper my-auto ms-auto ms-lg-4">
                        <Impressions />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-sm-6 mt-md-0 mt-4 grid-margin-xl-0 grid-margin">
                    <div className="d-flex">
                      <div className="wrapper">
                        <h3 className="mb-0 fw-semibold">7,688</h3>
                        <h5 className="mb-0 fw-medium text-primary">Conversion</h5>
                        <p className="mb-0 text-muted">+57.62(+0.76%)</p>
                      </div>
                      <div className="wrapper my-auto ms-auto ms-lg-4">
                        <Conversion />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-sm-6 mt-md-0 mt-4 grid-margin-xl-0 grid-margin">
                    <div className="d-flex">
                      <div className="wrapper">
                        <h3 className="mb-0 fw-semibold">1,553</h3>
                        <h5 className="mb-0 fw-medium text-primary">Downloads</h5>
                        <p className="mb-0 text-muted">+138.97(+0.54%)</p>
                      </div>
                      <div className="wrapper my-auto ms-auto ms-lg-4">
                        <Downloads />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title mb-0">Sales Statistics Overview</h4>
                <div className="d-xl-flex justify-content-between flex-column flex-lg-row">
                  <p>Lorem ipsum is placeholder text commonly used</p>
                  {/* <ul className="nav nav-tabs sales-mini-tabs ml-lg-auto mb-4 mb-md-0" role="tablist">
                    <li className="nav-item">
                      <button className="nav-link" id="sales-statistics_switch_1">1D</button>
                    </li>
                    <li className="nav-item">
                      <button className="">5D</button>
                    </li>
                    <li className="nav-item">
                      <button className="">1M</button>
                    </li>
                    <li className="nav-item">
                      <button className="">1Y</button>
                    </li>
                  </ul> */}
                </div>
                <div className="d-xl-flex justify-content-between flex-column flex-lg-row">
                  <div className="data-wrapper d-flex mt-2 mt-lg-0">
                    <div className="wrapper pe-5">
                      <h5 className="mb-0">Total Cost</h5>
                      <div className="d-xl-flex align-items-center">
                        <h4 className="fw-semibold mb-0">15,263</h4>
                        <small className="ms-2 text-secondary d-none d-lg-block"><b>89.5%</b> of 20,000 Total</small>
                      </div>
                    </div>
                    <div className="wrapper">
                      <h5 className="mb-0">Total Revenue</h5>
                      <div className="d-xl-flex align-items-center">
                        <h4 className="fw-semibold mb-0">$753,098</h4>
                        <small className="ms-2 text-secondary d-none d-lg-block"><b>10.5%</b> of 20,000 Total</small>
                      </div>
                    </div>
                  </div>
                  <div className="ml-lg-auto" id="sales-statistics-legend">
                  <div className="chartjs-legend line-legend">
                    <ul>
                      <li>
                        <span className="bg-info"></span>Revenue
                      </li>
                      <li>
                        <span className="bg-success"></span>Sales
                      </li>
                    </ul>
                  </div>
                  </div>
                </div>
                {/* <Line data={this.state} options={this.state.salesStaticsOptions}  datasetKeyProvider={this.datasetKeyProvider} height={50} width={100} id="salesStatisticsChart" />                */}
                <SalesStatistics />
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body d-flex flex-column">
                <div className="wrapper">
                  <h4 className="card-title mb-0">Net Profit Margin</h4>
                  <p>Started collecting data from February 2019</p>
                  <div className="mb-4 rounded-legend" id="net-profit-legend">
                  <ul>
                    <li>
                      <span className="bg-success"></span>Sales
                    </li>
                    <li>
                      <span className="bg-info"></span>Orders
                    </li>
                  </ul>
                  </div>
                </div>
                <NetProfit />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col-xl-6 col-lg-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body pb-0">
                    <div className="d-flex justify-content-between">
                      <h4 className="card-title mb-0">Total Revenue</h4>
                      <p className="fw-semibold mb-0">+1.37%</p>
                    </div>
                    <h3 className="fw-medium mb-4">184.42K</h3>
                  </div>
                  <TotalRevenue />
                </div>
              </div>
              <div className="col-xl-6 col-lg-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body pb-0">
                    <div className="d-flex justify-content-between">
                      <h4 className="card-title mb-0">Transaction</h4>
                      <p className="fw-semibold mb-0">-2.87%</p>
                    </div>
                    <h3 className="fw-medium">147.7K</h3>
                  </div>
                  <Transaction />
                </div>
              </div>
              <div className="col-md-12 grid-margin">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title mb-0">Market Overview</h4>
                    <div className="d-flex align-items-center justify-content-between w-100">
                      <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      <div className="dropdown">
                        <Dropdown>
                          <Dropdown.Toggle variant="btn btn-outline-secondary dropdown-toggle" id="dropdownMenuButton4">
                          Daily
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item>Daily</Dropdown.Item>
                            <Dropdown.Item>Weekly</Dropdown.Item>
                            <Dropdown.Item>Monthly</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                    <div className="d-flex align-items-end">
                      <h3 className="mb-0 fw-semibold">$36,2531.00</h3>
                      <p className="mb-0 fw-medium me-2 ms-2 mb-1">USD</p>
                      <p className="mb-0 text-success fw-semibold mb-1">(+1.37%)</p>
                    </div>
                    {/* <Bar data={this.marketingOverviewData} options={this.marketingOverviewOptions} datasetKeyProvider={this.datasetKeyProvider} height={100} id="marketingOverviewChart1"/> */}
                    <MarketOverview />
                  </div>
                </div>
              </div>
              <div className="col-md-12 grid-margin">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <h4 className="card-title mb-0">Invoice</h4>
                      <a href="!#" onClick={evt =>evt.preventDefault()}><small>Show All</small></a>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quod cupiditate esse fuga</p>
                    <div className="table-responsive">
                      <table className="table table-striped table-hover">
                        <thead>
                          <tr>
                            <th>Invoice ID</th>
                            <th>Customer</th>
                            <th>Status</th>
                            <th>Due Date</th>
                            <th>Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>INV-87239</td>
                            <td>Viola Ford</td>
                            <td>Paid</td>
                            <td>20 Jan 2019</td>
                            <td>$755</td>
                          </tr>
                          <tr>
                            <td>INV-87239</td>
                            <td>Dylan Waters</td>
                            <td>Unpaid</td>
                            <td>23 Feb 2019</td>
                            <td>$800</td>
                          </tr>
                          <tr>
                            <td>INV-87239</td>
                            <td>Louis Poole</td>
                            <td>Unpaid</td>
                            <td>25 Mar 2019</td>
                            <td>$463</td>
                          </tr>
                          <tr>
                            <td>INV-87239</td>
                            <td>Vera Howell</td>
                            <td>Paid</td>
                            <td>27 Mar 2019</td>
                            <td>$235</td>
                          </tr>
                          <tr>
                            <td>INV-87239</td>
                            <td>Allie Goodman</td>
                            <td>Unpaid</td>
                            <td>1 Apr 2019</td>
                            <td>$657</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="d-flex align-items-center pb-2">
                          <div className="dot-indicator bg-danger me-2"></div>
                          <p className="mb-0">Total Sales</p>
                        </div>
                        <h4 className="fw-semibold">$7,590</h4>
                        <ProgressBar variant="danger" now={80}/>
                      </div>
                      <div className="col-md-6 mt-4 mt-md-0">
                        <div className="d-flex align-items-center pb-2">
                          <div className="dot-indicator bg-success me-2"></div>
                          <p className="mb-0">Active Users</p>
                        </div>
                        <h4 className="fw-semibold">$5,460</h4>
                        <ProgressBar variant="success" now={50}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 grid-margin stretch-card average-price-card">
                <div className="card text-white">
                  <div className="card-body">
                    <div className="d-flex justify-content-between pb-2 align-items-center">
                      <h2 className="fw-semibold mb-0">4,624</h2>
                      <div className="icon-holder">
                        <i className="mdi mdi-briefcase-outline"></i>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <h5 className="fw-semibold mb-0">Average Price</h5>
                      <p className="text-white mb-0">Since last month</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-12 grid-margin">
                <div className="card">
                  <div className="card-body">
                    <h1 className="card-title mb-4">Website Audience Metrics</h1>
                    <div className="row">
                      <div className="col-xl-5 col-lg-12">
                        <div className="wrapper border-bottom mb-2 pb-2">
                          <h4 className="fw-semibold mb-0">523,200</h4>
                          <div className="d-flex align-items-center">
                            <p className="mb-0">Page Views</p>
                            <div className="dot-indicator bg-secondary ms-auto"></div>
                          </div>
                        </div>
                        <div className="wrapper mb-2 mb-lg-0">
                          <h4 className="fw-semibold mb-0">753,098</h4>
                          <div className="d-flex align-items-center">
                            <p className="mb-0">Bounce Rate</p>
                            <div className="dot-indicator bg-primary ms-auto"></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-7 col-lg-12 d-flex ps-4">
                        <div className="ms-auto">
                          {/* <Bar data={this.realTimeStatisticsData} options={this.realTimeStatisticsOptions} height={100}  id="realtime-statistics"/> */}
                          <RealTime />
                        </div>
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col-xl-5 col-lg-12">
                        <div className="d-flex align-items-center mb-2">
                          <div className="icon-holder bg-primary text-white py-1 px-3 rounded me-2">
                            <i className="mdi mdi-buffer icon-sm"></i>
                          </div>
                          <h2 className="fw-semibold mb-0">3,605</h2>
                        </div>
                        <p>Since last week</p>
                        <p className="mb-3 mb-lg-0"><span className="fw-medium">0.51%</span> (30 days)</p>
                      </div>
                      <div className="col-xl-7 col-lg-12">
                        <div className="mt-n3 ms-auto" id="dashboard-guage-chart"></div>
                        <GaugeChart id="gauge-chart1" textColor="#ffffff" percent={0.65} arcPadding={0} cornerRadius={0} nrOfLevels={2} colors={["#FF0017", "#eceaea"]} arcsLength={[0.4, 0.25]}  />
                        {/* <GaugeChart/> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 grid-margin">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title mb-4">World Selling</h4>
                    <div className="map-height">                      
                      <WorldSelling />
                    </div>
                    <div className="wrapper">
                      <div className="d-flex w-100 pt-2 mt-4">
                        <p className="mb-0 fw-semibold">California</p>
                        <div className="wrapper ms-auto d-flex align-items-center">
                          <p className="fw-semibold mb-0">26,437</p>
                          <p className="ms-1 mb-0">26%</p>
                        </div>
                      </div>
                      <div className="d-flex w-100 pt-2">
                        <p className="mb-0 fw-semibold">Washington</p>
                        <div className="wrapper ms-auto d-flex align-items-center">
                          <p className="fw-semibold mb-0">3252</p>
                          <p className="ms-1 mb-0">64%</p>
                        </div>
                      </div>
                      <div className="d-flex w-100 pt-2">
                        <p className="mb-0 fw-semibold">Michigan</p>
                        <div className="wrapper ms-auto d-flex align-items-center">
                          <p className="fw-semibold mb-0">4,987</p>
                          <p className="ms-1 mb-0">30%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 grid-margin">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title mb-0">Top Performer</h4>
                    <div className="d-flex mt-3 py-2 border-bottom">
                      <img className="img-sm rounded-circle" src="/images/faces/face3.jpg" alt="profile" />
                      <div className="wrapper ms-2">
                        <p className="mb-n1 fw-semibold">Ray Douglas</p>
                        <small>162543</small>
                      </div>
                      <small className="text-muted ms-auto">1 Hours ago</small>
                    </div>
                    <div className="d-flex py-2 border-bottom">
                      <span className="img-sm rounded-circle bg-warning text-white text-avatar">OH</span>
                      <div className="wrapper ms-2">
                        <p className="mb-n1 fw-semibold">Ora Hill</p>
                        <small>162543</small>
                      </div>
                      <small className="text-muted ms-auto">4 Hours ago</small>
                    </div>
                    <div className="d-flex py-2 border-bottom">
                      <img className="img-sm rounded-circle" src="/images/faces/face4.jpg" alt="profile" />
                      <div className="wrapper ms-2">
                        <p className="mb-n1 fw-semibold">Brian Dean</p>
                        <small>162543</small>
                      </div>
                      <small className="text-muted ms-auto">4 Hours ago</small>
                    </div>
                    <div className="d-flex pt-2">
                      <span className="img-sm rounded-circle bg-success text-white text-avatar">OB</span>
                      <div className="wrapper ms-2">
                        <p className="mb-n1 fw-semibold">Olive Bridges</p>
                        <small>162543</small>
                      </div>
                      <small className="text-muted ms-auto">7 Hours ago</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title mb-0">Recent Events</h4>
                <div className="d-flex py-2 border-bottom">
                  <div className="wrapper">
                    <small className="text-muted">Mar 14, 2019</small>
                    <p className="fw-semibold text-secondary mb-0">Change in Directors</p>
                  </div>
                  <small className="text-muted ms-auto">Edit event</small>
                </div>
                <div className="d-flex py-2 border-bottom">
                  <div className="wrapper">
                    <small className="text-muted">Mar 14, 2019</small>
                    <p className="fw-semibold text-secondary mb-0">Other Events</p>
                  </div>
                  <small className="text-muted ms-auto">Edit event</small>
                </div>
                <div className="d-flex py-2 border-bottom">
                  <div className="wrapper">
                    <small className="text-muted">Mar 14, 2019</small>
                    <p className="fw-semibold text-secondary mb-0">Quarterly Report</p>
                  </div>
                  <small className="text-muted ms-auto">Edit event</small>
                </div>
                <div className="d-flex pt-2">
                  <div className="wrapper">
                    <small className="text-muted">Mar 14, 2019</small>
                    <p className="fw-semibold text-secondary mb-0">Change in Directors</p>
                  </div>
                  <small className="text-muted ms-auto">Edit event</small>
                </div>
                <a className="d-block mt-5" href="!#" onClick={evt =>evt.preventDefault()}>Show all</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between pb-3">
                  <h4 className="card-title mb-0">Activities</h4>
                  <p className="mb-0 text-muted">20 finished, 5 remaining</p>
                </div>
                <ul className="dashboard-timeline">
                  <li className="timeline-item">
                    <p className="timeline-content"><a href="!#" onClick={evt =>evt.preventDefault()}>Ben Tossell</a> assign you a task</p>
                    <p className="event-time">Just now</p>
                  </li>
                  <li className="timeline-item">
                    <p className="timeline-content"><a href="!#" onClick={evt =>evt.preventDefault()}>Ben Tossell</a> assign you a task</p>
                    <p className="event-time">Just now</p>
                  </li>
                  <li className="timeline-item">
                    <p className="timeline-content"><a href="!#" onClick={evt =>evt.preventDefault()}>Ben Tossell</a> assign you a task</p>
                    <p className="event-time">Just now</p>
                  </li>
                  <li className="timeline-item">
                    <p className="timeline-content"><a href="!#" onClick={evt =>evt.preventDefault()}>Ben Tossell</a> assign you a task</p>
                    <p className="event-time">Just now</p>
                  </li>
                  <li className="timeline-item">
                    <p className="timeline-content"><a href="!#" onClick={evt =>evt.preventDefault()}>Ben Tossell</a> assign you a task</p>
                    <p className="event-time">Just now</p>
                  </li>
                </ul>
                <a className="d-block mt-3" href="!#" onClick={evt =>evt.preventDefault()}>Show all</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title mb-0">People Also Watch</h4>
                <div className="table-responsive">
                  <table className="table table-stretched">
                    <thead>
                      <tr>
                        <th>Symbol</th>
                        <th>Last Price</th>
                        <th>Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <p className="mb-1 text-light fw-medium">NFLX</p><small className="fw-medium">Netflix, Inc.</small>
                        </td>
                        <td className="fw-medium">$250.00</td>
                        <td className="text-success fw-medium">+12.64</td>
                      </tr>
                      <tr>
                        <td>
                          <p className="mb-1 text-light fw-medium">TSLA</p><small className="fw-medium">Tesla, Inc.</small>
                        </td>
                        <td className="fw-medium">$458.00</td>
                        <td className="text-danger fw-medium">-14.53</td>
                      </tr>
                      <tr>
                        <td>
                          <p className="mb-1 text-light fw-medium">GOOG</p><small className="fw-medium">Alphabet, Inc.</small>
                        </td>
                        <td className="fw-medium">$250.00</td>
                        <td  className="text-danger fw-medium">+12.64</td>
                      </tr>
                      <tr>
                        <td>
                          <p className="mb-1 text-light fw-medium">AMZN</p><small className="fw-medium">Amazon.com, Inc.</small>
                        </td>
                        <td className="fw-medium">$546.00</td>
                        <td className="text-success fw-medium">+24.34</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <a className="d-block mt-3" href="!#" onClick={evt =>evt.preventDefault()}>Show all</a>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Dashboard