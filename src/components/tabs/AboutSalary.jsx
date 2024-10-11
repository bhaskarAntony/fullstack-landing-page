import { Fragment } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './style.css'
import TabsSection from '../tabsSection/TabsSection';

function AboutSalary({click}) {
    const fullstack = {
        designation: [
            'Fullstack Engineer',
            'Fullstack Web Developer',
            'Fullstack Software Developer',
            'Senior Fullstack Developer',
            'Junior Fullstack Developer'
        ],
        salary: {
            2016: [70000, 68000, 72000, 85000, 60000],
            2017: [75000, 72000, 78000, 90000, 62000],
            2018: [78000, 75000, 80000, 95000, 64000],
            2019: [80000, 78000, 85000, 100000, 66000],
            2020: [83000, 81000, 88000, 105000, 67000],
            2021: [85000, 80000, 90000, 115000, 68000],
            2022: [90000, 85000, 95000, 120000, 70000],
            2023: [95000, 88000, 98000, 125000, 73000]
        },
        demand: [75, 70, 80, 85, 65]
    };
    
    const python = {
        designation: [
            'Python Developer',
            'Python Software Engineer',
            'Backend Python Developer',
            'Data Engineer (Python)',
            'Machine Learning Engineer (Python)'
        ],
        salary: {
            2016: [68000, 70000, 72000, 80000, 82000],
            2017: [72000, 73000, 76000, 85000, 86000],
            2018: [75000, 76000, 78000, 90000, 92000],
            2019: [78000, 79000, 81000, 95000, 97000],
            2020: [82000, 84000, 86000, 100000, 105000],
            2021: [88000, 90000, 92000, 110000, 115000],
            2022: [92000, 95000, 97000, 115000, 120000],
            2023: [95000, 98000, 100000, 120000, 125000]
        },
        demand: [80, 75, 85, 88, 90]
    };
    
    const java = {
        designation: [
            'Java Developer',
            'Java Software Engineer',
            'Backend Java Developer',
            'Senior Java Developer',
            'Java Fullstack Developer'
        ],
        salary: {
            2016: [70000, 72000, 75000, 85000, 80000],
            2017: [75000, 77000, 80000, 90000, 85000],
            2018: [80000, 82000, 85000, 95000, 90000],
            2019: [85000, 87000, 90000, 100000, 95000],
            2020: [88000, 90000, 93000, 105000, 97000],
            2021: [90000, 92000, 95000, 110000, 100000],
            2022: [95000, 98000, 100000, 115000, 105000],
            2023: [100000, 105000, 108000, 120000, 110000]
        },
        demand: [78, 72, 85, 90, 80]
    };
    
    const mernstack = {
        designation: [
            'MERN Stack Developer',
            'MERN Stack Engineer',
            'Fullstack JavaScript Developer',
            'React.js Developer',
            'Node.js Developer'
        ],
        salary: {
            2016: [65000, 67000, 70000, 75000, 72000],
            2017: [70000, 72000, 75000, 80000, 77000],
            2018: [75000, 78000, 80000, 85000, 82000],
            2019: [80000, 83000, 85000, 90000, 87000],
            2020: [85000, 88000, 90000, 95000, 90000],
            2021: [90000, 93000, 95000, 100000, 95000],
            2022: [95000, 98000, 100000, 105000, 100000],
            2023: [100000, 103000, 105000, 110000, 105000]
        },
        demand: [70, 68, 75, 80, 72]
    };
    
    
  return (
   <div className='p-3 p-md-5 about-salary container-fluid' id='fullstack'>
  

    <div className="d-flex flex-column align-items-center justify-content-center w-100 text-center">
            <h1 className='fs-4'>Why Full Stack Masters Program ?</h1>
            <div className="v-line"></div>
            <div className="icon mb-3"><i class="bi bi-ui-checks-grid text-light"></i></div>
            <h1 className="fs-3 fw-bold text-main">Demand on Fullstack</h1>
        </div>
     <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3 mt-5"
      fill
    >
      <Tab eventKey="fullstack" title="Fullstack Developer">
        <TabsSection data={fullstack} click={click}/>
      </Tab>
      <Tab eventKey="profile" title="MERN Developer">
      <TabsSection data={mernstack}  click={click}/>
      </Tab>
      <Tab eventKey="longer-tab" title="Java Developer">
      <TabsSection data={java} click={click}/>
      </Tab>
      <Tab eventKey="contact" title="Python Developer">
      <TabsSection data={python} click={click}/>
      </Tab>
    </Tabs>
   </div>
  );
}

export default AboutSalary;