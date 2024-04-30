/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CourseType from '@/components/courses/course-type';
import Pagination from '@/components/ui/pagination';

import {
  add_count_page,
  add_force_page,
  add_item_offset,
} from '../../redux/features/filter-slice';

const CourseItems = ({
  itemsPerPage,
  items,
  setShowing,
}: {
  itemsPerPage: number;
  items: any[]; // Use 'any' if the items can be of any type
  setShowing: (count: number) => void;
}) => {
  const { page_count, item_offset, forcePage } = useSelector(
    (state: { filter: any }) => state.filter // Use 'any' for flexibility
  );
  const [currentItems, setCurrentItems] = useState<any[] | null>(null); // Use 'any' for flexibility
  const [pageCount, setPageCount] = useState<number>(page_count);
  const [itemOffset, setItemOffset] = useState<number>(item_offset);
  const dispatch = useDispatch();

  // side effect
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  useEffect(() => {
    if (currentItems && setShowing) {
      setShowing(currentItems.length);
    }
  }, [currentItems, setShowing]);

  useEffect(() => {
    dispatch(add_count_page(pageCount));
    dispatch(add_item_offset(itemOffset));
  }, [dispatch, itemOffset, pageCount]);

  useEffect(() => {
    setPageCount(page_count);
    setItemOffset(item_offset);
  }, [item_offset, page_count]);

  // handlePageClick
  const handlePageClick = (event: any) => {
    // Use 'any' for flexibility
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
    dispatch(add_force_page(event.selected));
  };

  return (
    <>
      {currentItems &&
        currentItems.map((course: any, i: number) => {
          // Use 'any' for flexibility
          return <CourseType key={i} data={course} />;
        })}

      <Pagination
        handlePageClick={handlePageClick}
        pageCount={pageCount}
        focusPage={forcePage}
      />
    </>
  );
};

export default CourseItems;
