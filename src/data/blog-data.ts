const blog_data = [
  {
    id: 1,
    img: '/images/blog/blog-01.jpg',
    category: 'ONLINE',
    title: 'Become a Better Blogger: Content Planning',
    date: 'Oct 10, 2022',
    comment: 9,
    sm_desc: 'Lorem ipsum dolor sit amet cons tetur adipisicing sed.',
    delay: '100',
    home_1: true,
  },
  {
    id: 2,
    img: '/images/blog/blog-02.jpg',
    category: 'LECTURE',
    title: 'How to Keep Workouts Fresh in the Morning',
    date: 'Jan 10, 2022',
    comment: 15,
    sm_desc:
      'Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt labore dol oremagna aliqua.',
    delay: '200',
    home_1: true,
  },
  {
    id: 3,
    img: '/images/blog/blog-03.jpg',
    category: 'BUSINESS',
    title: 'Four Ways to Keep Your Workout Routine Fresh',
    date: 'Feb 10, 2021',
    comment: 12,
    sm_desc:
      'Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt.',
    delay: '300',
    home_1: true,
  },
  // home 4
  {
    id: 4,
    img: '/images/blog/blog-04.jpg',
    category: 'ONLINE',
    title: 'Eco-Education in Our Lives: We Can Change the Future',
    date: 'JAN 10 2021',
    comment: 18,
    sm_desc:
      'Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.',
    author: 'Edward',
    large: true,
    home_4: true,
  },
  {
    id: 5,
    img: '/images/blog/blog-05.jpg',
    category: 'LECTURE',
    title: 'Qualification for Students’ Satisfaction Rate',
    date: 'SEP 10 2021',
    comment: 14,
    sm_desc:
      'Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.',
    author: 'Edward',
    home_4: true,
  },
  {
    id: 6,
    img: '/images/blog/blog-06.jpg',
    category: 'LECTURE',
    title: 'Instructional Design and Adult Learners',
    date: 'SEP 18 2021',
    comment: 9,
    sm_desc:
      'Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.',
    author: 'Edward',
    home_4: true,
  },
  {
    id: 7,
    img: '/images/blog/blog-10.jpg',
    category: 'LECTURE',
    title: 'Join ATD 2021 International Conference & EXPO',
    date: 'SEP 25 2021',
    comment: 16,
    sm_desc:
      'Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.',
    author: 'Edward',
    home_4: true,
  },
  // home 5
  {
    id: 8,
    img: '/images/blog/blog-11.jpg',
    category: 'ONLINE',
    title: 'Become a Better Blogger: Content Planning',
    date: 'Oct 10, 2022',
    comment: 10,
    sm_desc: 'Lorem ipsum dolor sit amet cons tetur adipisicing sed.',
    author: 'Edward',
    kitchen: true,
  },
  {
    id: 9,
    img: '/images/blog/blog-12.jpg',
    category: 'LECTURE',
    title: 'Fresh Inspiration For March And A Smashing',
    date: 'Oct 15, 2022',
    comment: 12,
    sm_desc:
      'Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt labore dol oremagna aliqua.',
    author: 'Edward',
    kitchen: true,
  },
  {
    id: 10,
    img: '/images/blog/blog-13.jpg',
    category: 'BUSINESS',
    title: 'How to Developers Taking the Guess Work',
    date: 'Oct 20, 2022',
    comment: 15,
    sm_desc:
      'Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt.',
    author: 'Edward',
    kitchen: true,
  },
  // kindergarten
  {
    id: 11,
    img: '/images/blog/blog-07.jpg',
    category: 'ONLINE',
    title: 'Do You Play Well With Other Children?',
    date: 'Nov 20, 2022',
    comment: 10,
    sm_desc: 'Lorem ipsum dolor sit amet cons tetur adipisicing sed.',
    author: 'Edward',
    kindergarten_blog: true,
  },
  {
    id: 12,
    img: '/images/blog/blog-08.jpg',
    category: 'HISTORY',
    title: 'Early History of the United States',
    date: 'Dec 20, 2022',
    comment: 12,
    sm_desc: 'Lorem ipsum dolor sit amet cons tetur adipisicing sed.',
    author: 'Edward',
    kindergarten_blog: true,
  },
  {
    id: 13,
    img: '/images/blog/blog-09.jpg',
    category: 'BASEBALL',
    title: 'What Collecting Baseball Cards Taught Me',
    date: 'Feb 20, 2022',
    comment: 15,
    sm_desc: 'Lorem ipsum dolor sit amet cons tetur adipisicing sed.',
    author: 'Edward',
    kindergarten_blog: true,
  },
  // modern schooling
  {
    id: 14,
    img: '/images/blog/blog-32.jpg',
    category: 'ONLINE',
    title: 'Good Things are Happening Creative Learning',
    date: 'Oct 20, 2022',
    comment: 14,
    sm_desc: 'Lorem ipsum dolor sit amet cons tetur sed idunt.',
    author: 'Edward',
    delay: '100',
    modern_schooling_blog: true,
  },
  {
    id: 15,
    img: '/images/blog/blog-33.jpg',
    category: 'LECTURE',
    title: 'Creating a Community of Diverse Learners',
    date: 'Oct 15, 2022',
    comment: 14,
    sm_desc: 'Lorem ipsum dolor sit amet cons tetur sed idunt.',
    author: 'Edward',
    delay: '200',
    modern_schooling_blog: true,
  },
  {
    id: 16,
    img: '/images/blog/blog-34.jpg',
    category: 'BUSINESS',
    title: 'Changing Lives and Giving Choices For Everyone',
    date: 'Oct 23, 2022',
    comment: 19,
    sm_desc: 'Lorem ipsum dolor sit amet cons tetur sed idunt.',
    author: 'Edward',
    delay: '300',
    modern_schooling_blog: true,
  },
  {
    id: 17,
    img: '/images/blog/blog-35.jpg',
    category: 'BUSINESS',
    title: 'An Excellent Foundation for Future Success',
    date: 'Oct 30, 2022',
    comment: 20,
    sm_desc: 'Lorem ipsum dolor sit amet cons tetur sed idunt.',
    author: 'Edward',
    delay: '300',
    modern_schooling_blog: true,
  },

  // blog standard
  {
    id: 18,
    img: '/images/blog/blog-14.jpg',
    category: 'Arts & Gallery',
    title: '4 Learning Management System Design Tips For Better eLearning',
    date: 'Oct 10, 2022',
    comment: '09',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.',
    blog_standard: true,
  },
  {
    id: 19,
    video: true,
    img: '/images/blog/blog-15.jpg',
    category: 'Online',
    title: 'Fresh Inspiration For March And A Smashing Winner 2022',
    date: 'Oct 15, 2022',
    comment: '10',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.',
    blog_standard: true,
  },
  {
    id: 20,
    slider: true,
    images: [
      '/images/blog/blog-16_1.jpg',
      '/images/blog/blog-16_2.jpg',
      '/images/blog/blog-16_3.jpg',
    ],
    category: 'Education',
    title: 'How to Developers Taking the Guess Work Generation of Business',
    date: 'Oct 18, 2022',
    comment: '12',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.',
    blog_standard: true,
  },
  {
    id: 21,
    img: '/images/blog/blog-17.jpg',
    category: 'Developer',
    title: 'How to Become Computer Working Days Software Engineer?',
    date: 'Oct 20, 2022',
    comment: '15',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.',
    blog_standard: true,
  },
  {
    id: 22,
    img: '/images/blog/blog-18.jpg',
    category: 'Business',
    title: 'Ten Benefits Of Rentals That May Change Your Perspective',
    date: 'Jan 20, 2022',
    comment: '18',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.',
    blog_standard: true,
  },

  // blog masonry
  {
    id: 23,
    img: '/images/blog/blog-01.jpg',
    category: 'ONLINE',
    title: 'Become a Better Blogger: Content Planning',
    date: 'Sep 20, 2022',
    comment: '08',
    desc: 'Lorem ipsum dolor sit amet cons tetur adipisicing sed.',
    blog_masonry: true,
  },
  {
    id: 24,
    img: '/images/blog/blog-02.jpg',
    category: 'Lecture',
    title: 'Fresh Inspiration For March And A',
    date: 'Sep 15, 2022',
    comment: '10',
    desc: 'Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt labore dol oremagna aliqua.',
    blog_masonry: true,
  },
  {
    id: 25,
    img: '/images/blog/blog-03.jpg',
    category: 'Business',
    title: 'How to Developers Taking the Guess Work',
    date: 'Sep 17, 2022',
    comment: '12',
    desc: 'Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt.',
    blog_masonry: true,
  },
  {
    id: 26,
    img: '/images/blog/blog-19.jpg',
    category: 'Business',
    title: 'How to Become Computer Working Days',
    date: 'Oct 17, 2022',
    comment: '15',
    desc: 'Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt labore ad dolore magna aliqua enim mini veniam quis nostrud exercitation.ullamco laboris.',
    blog_masonry: true,
  },
  {
    id: 27,
    img: '/images/blog/blog-21.jpg',
    category: 'Lecture',
    title: 'Designing an Online Course from',
    date: 'Nov 15, 2022',
    comment: '20',
    desc: 'Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt labore dol oremagna aliqua.',
    blog_masonry: true,
  },
  {
    id: 28,
    img: '/images/blog/blog-20.jpg',
    category: 'Online',
    title: 'Ten Benefits Of Rentals That May Change',
    date: 'Nov 20, 2022',
    comment: '13',
    desc: 'Lorem ipsum dolor sit amet cons tetur adipisicing sed.',
    blog_masonry: true,
  },
  {
    id: 29,
    img: '/images/blog/blog-23.jpg',
    category: 'Business',
    title: 'How to Keep Workouts Fresh in the',
    date: 'Nov 27, 2022',
    comment: '16',
    desc: 'Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt labore ad dolore magna aliqua enim mini veniam quis nostrud exercitation.ullamco laboris.',
    blog_masonry: true,
  },
  {
    id: 30,
    img: '/images/blog/blog-24.jpg',
    category: 'Online',
    title: 'Become a Better Blogger: Content Planning',
    date: 'Nov 29, 2022',
    comment: '22',
    desc: 'Lorem ipsum dolor sit amet cons tetur adipisicing sed.',
    blog_masonry: true,
  },
  {
    id: 31,
    img: '/images/blog/blog-22.jpg',
    category: 'Lecture',
    title: 'Unveiling the Secrets of Online Teaching',
    date: 'Nov 30, 2022',
    comment: '18',
    desc: 'Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt.',
    blog_masonry: true,
  },

  // list blog
  {
    id: 32,
    img: '/images/blog/blog-25.jpg',
    category: 'Business',
    title: '4 Learning Management System Design Tips',
    date: 'Sep 17, 2022',
    comment: '12',
    desc: 'Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod.',
    blog_list: true,
  },
  {
    id: 33,
    img: '/images/blog/blog-26.jpg',
    category: 'Business',
    title: 'How to Developers Taking the Guess Work',
    date: 'Oct 17, 2022',
    comment: '15',
    desc: 'Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod.',
    blog_list: true,
  },
  {
    id: 34,
    img: '/images/blog/blog-27.jpg',
    category: 'Lecture',
    title: 'Ten Benefits Of Rentals That May Change Your',
    date: 'Nov 15, 2022',
    comment: '20',
    desc: 'Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod.',
    blog_list: true,
  },
  {
    id: 35,
    img: '/images/blog/blog-28.jpg',
    category: 'Online',
    title: 'Fresh Inspiration For March And A Smashing',
    date: 'Nov 20, 2022',
    comment: '13',
    desc: 'Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod.',
    blog_list: true,
  },
  {
    id: 36,
    img: '/images/blog/blog-29.jpg',
    category: 'Business',
    title: 'Fresh Inspiration For March And A Smashing',
    date: 'Nov 27, 2022',
    comment: '16',
    desc: 'Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod.',
    blog_list: true,
  },
  {
    id: 37,
    img: '/images/blog/blog-30.jpg',
    category: 'Online',
    title: 'How to Developers Taking the Guess Work',
    date: 'Nov 29, 2022',
    comment: '22',
    desc: 'Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod.',
    blog_list: true,
  },
  {
    id: 38,
    img: '/images/blog/blog-31.jpg',
    category: 'Lecture',
    title: 'Ten Benefits Of Rentals That May Change',
    date: 'Nov 30, 2022',
    comment: '18',
    desc: 'Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod.',
    blog_list: true,
  },
];

export default blog_data;
