'use client';
import { notFound } from 'next/navigation';
import React from 'react';

import faculty_data from '@/data/faculty';

import Breadcrumb from '@/components/breadcrumb';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

import MemberArea from './member-area';

const parent_page = {
  title: 'Faculty Home',
  url: '/faculty',
};

const index = ({ slug }: { slug: string }) => {
  const facultyMember = findFacultyBySlug(slug);

  return (
    <div className='sticky-header'>
      <div id='main-wrapper' className='main-wrapper'>
        <Header />
        <Breadcrumb
          title='Faculty Details'
          current_page={facultyMember.name}
          parent_page={parent_page}
        />
        <MemberArea member={facultyMember} />
        <Footer dark_bg={true} />
      </div>
    </div>
  );
};

export default index;

function findFacultyBySlug(slug: string) {
  const facultyMember = faculty_data.find((faculty) => faculty.slug === slug);
  if (facultyMember) {
    return facultyMember;
  } else {
    notFound();
  }
}
