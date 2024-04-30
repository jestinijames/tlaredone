/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

const CourseSortingArea = ({
  num,
  course_list,
  items,
}: {
  num: any;
  course_list: any;
  items: any;
}) => {
  // const handleChange = (e) => {
  //     if (e.target.value === 'Filters') {
  //         setCourses(course_items);
  //     } else if (e.target.value === 'Low To High') {
  //         const lowToHigh = courses.slice().sort((a, b) => parseFloat(a.course_price) - parseFloat(b.course_price))
  //         setCourses(lowToHigh);
  //     } else if (e.target.value === 'High To Low') {
  //         const highToHigh = courses.slice().sort((a, b) => parseFloat(b.course_price) - parseFloat(a.course_price))
  //         setCourses(highToHigh);
  //     }
  //     dispatch(add_item_offset(0));
  //     dispatch(add_force_page(0));
  // }

  return (
    <div className='edu-sorting-area'>
      <div className='sorting-left'>
        {items ? (
          <h6 className='showing-text'>
            Showing <span>{num}</span> of <span>{items.length}</span> courses
          </h6>
        ) : (
          <h6 className='showing-text'>
            Showing <span>{num}</span> courses
          </h6>
        )}
      </div>
      <div className='sorting-right'>
        {/* <div className='layout-switcher'>
          <label>{course_list ? 'List' : 'Grid'}</label>
          <ul className='switcher-btn'>
            <li>
              <Link
                className={!course_list ? 'active' : ''}
                href='/course-style-1'
              >
                <i className='icon-53'></i>
              </Link>
            </li>
            <li>
              <Link
                className={course_list ? 'active' : ''}
                href='/course-style-4'
              >
                <i className='icon-54'></i>
              </Link>
            </li>
          </ul>
        </div> */}
        {/* <div className="edu-sorting">
                    <div className="icon"><i className="icon-55"></i></div>
                    <select onChange={handleChange} className="edu-select">
                        <option>Filters</option>
                        <option>Low To High</option>
                        <option>High To Low</option>
                    </select>
                </div> */}
      </div>
    </div>
  );
};

export default CourseSortingArea;
