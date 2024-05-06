/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import course_data from '@/data/course-data';

import {
  add_category,
  add_force_page,
  add_instructor,
  add_item_offset,
  add_language,
  add_tag,
  reset_filter,
} from '@/redux/features/filter-slice';

const courses = course_data.filter(
  (
    arr: {
      id: number;
      img: string;
      title: string;
      category: string;
      bg_color?: string;
    },
    index: number,
    self: {
      id: number;
      img: string;
      title: string;
      category: string;
      bg_color?: string;
    }[]
  ) =>
    index ===
    self.findIndex(
      (i: {
        id: number;
        img: string;
        title: string;
        category: string;
        bg_color?: string;
      }) => i.img === arr.img
    )
);

const all_categories = [
  ...new Set(courses.map((course: { category: any }) => course.category)),
];
const all_instructors = [
  ...new Set(
    course_data.flatMap((course) =>
      course.instructors.map((instructor) => instructor.name)
    )
  ),
];

const all_tags = [
  ...new Set(course_data.flatMap((course) => course.tags.map((tag) => tag))),
];

const all_languages = [
  ...new Set(courses.map((course: { language: any }) => course.language)),
];

const CourseSidebar = ({ course_items }: { course_items: any }) => {
  const [showCategory, setShowCategory] = useState(true);
  const [showInstructor, setShowInstructor] = useState(true);
  const [showTag, setShowTag] = useState(true);
  const [showLanguage, setShowLanguage] = useState(true);
  const { categories, instructors, tags, languages } = useSelector(
    (state: {
      filter: {
        categories: any[];
        instructors: any[];
        tags: any[];
        languages: any[];
      };
    }) => state.filter
  );
  const dispatch = useDispatch();

  // handleCategory
  const handleCategory = (cate: any) => {
    const index = categories.findIndex((item: any) => item === cate);
    if (index >= 0) {
      dispatch(add_category({ changeType: 'remove', item: cate }));
    } else {
      dispatch(add_category({ changeType: 'added', item: cate }));
    }
    dispatch(add_item_offset(0));
    dispatch(add_force_page(0));
  };

  // handleInstructor
  const handleInstructor = (instructor: any) => {
    dispatch(add_instructor({ instructor }));
    dispatch(add_item_offset(0));
    dispatch(add_force_page(0));
  };

  const handleTag = (tag: any) => {
    dispatch(add_tag({ tag }));
    dispatch(add_item_offset(0));
    dispatch(add_force_page(0));
  };

  // handleLanguage
  const handleLanguage = (language: any) => {
    dispatch(add_language({ language }));
    dispatch(add_item_offset(0));
    dispatch(add_force_page(0));
  };

  useEffect(() => {
    dispatch(reset_filter());
  }, []);

  return (
    <div className='course-sidebar-2'>
      <div className='edu-course-widget widget-category'>
        <div className='inner'>
          <h5
            className={`widget-title widget-toggle ${
              showCategory ? 'active' : ''
            }`}
            onClick={() => setShowCategory(!showCategory)}
          >
            Categories
          </h5>

          <div
            className='content'
            style={{ display: showCategory ? 'block' : 'none' }}
          >
            {all_categories.map((c, i) => (
              <div key={i} className='edu-form-check'>
                <input
                  onClick={() => handleCategory(c)}
                  type='checkbox'
                  checked={categories.includes(c)}
                  id={`cat-check${i + 1}`}
                  readOnly
                />
                <label htmlFor={`cat-check${i + 1}`}>
                  {c}
                  <span>
                    (
                    {
                      course_items.filter(
                        (item: { category: any }) => item.category === c
                      )?.length
                    }
                    )
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='edu-course-widget widget-instructor'>
        <div className='inner'>
          <h5
            className={`widget-title widget-toggle ${
              showInstructor ? 'active' : ''
            }`}
            onClick={() => setShowInstructor(!showInstructor)}
          >
            Instructors
          </h5>

          <div
            className='content'
            style={{ display: showInstructor ? 'block' : 'none' }}
          >
            {all_instructors.map((instructor, i) => (
              <div key={i} className='edu-form-check'>
                <input
                  onClick={() => handleInstructor(instructor)}
                  checked={instructors.includes(instructor)}
                  type='checkbox'
                  id={`cat-check-2${i + 1}`}
                  readOnly
                />
                <label htmlFor={`cat-check-2${i + 1}`}>
                  {instructor}{' '}
                  <span>
                    (
                    {
                      course_items.filter((item: { instructors: any[] }) =>
                        item.instructors.some(
                          (courseInstructor: { name: string }) =>
                            courseInstructor.name === instructor
                        )
                      )?.length
                    }
                    )
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='edu-course-widget widget-instructor'>
        <div className='inner'>
          <h5
            className={`widget-title widget-toggle ${showTag ? 'active' : ''}`}
            onClick={() => setShowTag(!showTag)}
          >
            Tags
          </h5>

          <div
            className='content'
            style={{ display: showTag ? 'block' : 'none' }}
          >
            {all_tags.map((tag, i) => (
              <div key={i} className='edu-form-check'>
                <input
                  onClick={() => handleTag(tag)}
                  checked={tags.includes(tag)}
                  type='checkbox'
                  id={`cat-check-2${i + 1}`}
                  readOnly
                />
                <label htmlFor={`cat-check-2${i + 1}`}>
                  {tag}{' '}
                  <span>
                    (
                    {
                      course_items.filter((item: { tags: any[] }) =>
                        item.tags.some((courseTag) => courseTag === tag)
                      )?.length
                    }
                    )
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='edu-course-widget widget-language'>
        <div className='inner'>
          <h5
            className={`widget-title widget-toggle ${
              showLanguage ? 'active' : ''
            }`}
            onClick={() => setShowLanguage(!showLanguage)}
          >
            Language
          </h5>

          <div
            className='content'
            style={{ display: showLanguage ? 'block' : 'none' }}
          >
            {all_languages.map((language, i) => (
              <div key={i} className='edu-form-check'>
                <input
                  onClick={() => handleLanguage(language)}
                  checked={languages.includes(language)}
                  type='checkbox'
                  id={`cat-check-4${i + 1}`}
                  readOnly
                />
                <label htmlFor={`cat-check-4${i + 1}`}>
                  {language}
                  <span>
                    (
                    {
                      course_items.filter(
                        (item: { language: any }) => item.language === language
                      )?.length
                    }
                    )
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='edu-course-widget'>
        <h5 className='widget-title mb-4'>Reset Filter</h5>
        <button
          onClick={() => dispatch(reset_filter())}
          className='edu-btn btn-small mb--30'
        >
          Reset Filter
        </button>
      </div>
    </div>
  );
};

export default CourseSidebar;
