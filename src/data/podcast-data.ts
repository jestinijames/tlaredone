const podcast_data = [
  {
    id: 1,
    img: '/images/event/event-01.jpg',
    time: '08:00AM-10:00PM',
    title: 'Learn English in Ease',
    date: 'SEP 30 2022',
    sm_desc:
      'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.',
    delay: '100',
    event_meta: 'Newyork City, USA',
    university: true,
    podcast_grid: true,
  },
  {
    id: 2,
    img: '/images/event/event-02.jpg',
    time: '04:00PM-07:00PM',
    title: 'Annual Workshop',
    date: 'DEC 25 2022',
    sm_desc:
      'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.',
    delay: '200',
    event_meta: 'Washington D.C, USA',
    university: true,
    podcast_grid: true,
  },
  {
    id: 3,
    img: '/images/event/event-03.jpg',
    time: '10:00AM-11:00AM',
    title: 'Design Think & Innovation',
    date: 'NOV 25 2022',
    sm_desc:
      'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.',
    delay: '300',
    event_meta: 'New york City, USA',
    university: true,
    podcast_grid: true,
  },
  // home 7
  {
    id: 4,
    img: '/images/event/event-04.jpg',
    bg_style: 'bg-style-extra02',
    time: '10:00AM-11:00AM',
    title: 'Annual Music Conference',
    date: 'Nov 18, 2022',
    sm_desc: 'Lorem ipsum dolor sit amet consectur adipisicing elit.',
    event_meta: 'Ohio City, USA',
    home_7: true,
  },
  {
    id: 5,
    img: '/images/event/event-05.jpg',
    bg_style: 'bg-style-secondary',
    time: '09:00AM-11:00AM',
    title: 'Garden Camping Party',
    date: 'Oct 15, 2022',
    sm_desc: 'Lorem ipsum dolor sit amet consectur adipisicing elit.',
    event_meta: 'Newyork City, USA',
    home_7: true,
  },
  {
    id: 6,
    img: '/images/event/event-06.jpg',
    bg_style: 'bg-style-extra05',
    time: '08:00AM-09:00AM',
    title: 'Caterpillars to Butterflies',
    date: 'Dec 15, 2022',
    sm_desc: 'Lorem ipsum dolor sit amet consectur adipisicing elit.',
    event_meta: 'Washington D.C, USA',
    home_7: true,
  },
  {
    id: 7,
    img: '/images/event/event-07.jpg',
    bg_style: 'bg-style-primary',
    time: '11:00AM-12:PM',
    title: 'Animal Petting Party',
    date: 'Dec 28, 2022',
    sm_desc: 'Lorem ipsum dolor sit amet consectur adipisicing elit.',
    event_meta: 'Ohio City, USA',
    home_7: true,
  },
  //  podcast_grid,
  {
    id: 8,
    img: '/images/event/event-08.jpg',
    time: '08:00AM-10:00PM',
    title: 'Annual Workshop',
    date: 'OCT 28 2022',
    sm_desc:
      'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.',
    event_meta: 'Newyork City, USA',
    podcast_grid: true,
  },
  {
    id: 9,
    img: '/images/event/event-09.jpg',
    time: '08:00AM-10:00PM',
    title: 'Annual Workshop',
    date: 'OCT 25 2022',
    sm_desc:
      'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.',
    event_meta: 'Newyork City, USA',
    podcast_grid: true,
  },
  {
    id: 10,
    img: '/images/event/event-10.jpg',
    time: '08:00AM-10:00PM',
    title: 'Annual Workshop',
    date: 'OCT 18 2022',
    sm_desc:
      'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.',
    event_meta: 'Newyork City, USA',
    podcast_grid: true,
  },
  {
    id: 11,
    img: '/images/event/event-08.jpg',
    time: '08:00AM-10:00PM',
    title: 'Annual Workshop',
    date: 'OCT 28 2022',
    sm_desc:
      'Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.',
    event_meta: 'Newyork City, USA',
    podcast_grid: true,
  },

  // event lists
  {
    id: 12,
    img: '/images/event/event-14.jpg',
    time: '08:00AM-10:00PM',
    title: 'Global Education Fall Meeting for Everyone',
    date: 'OCT 28, 2022',
    sm_desc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt.',
    event_meta: 'Newyork City, USA',
    event_list: true,
    category: 'Art & Design',
  },
  {
    id: 13,
    img: '/images/event/event-15.jpg',
    time: '09:00AM-11:00PM',
    title: 'Our excellence partner France Pavilion',
    date: 'FEB 28, 2022',
    sm_desc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt.',
    event_meta: 'Newyork City, USA',
    event_list: true,
    category: 'Development',
  },
  {
    id: 14,
    img: '/images/event/event-16.jpg',
    time: '07:00AM-09:00PM',
    title: 'Explorations of New Approaches Works',
    date: 'FEB 15, 2022',
    sm_desc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt.',
    event_meta: 'Newyork City, USA',
    event_list: true,
    category: 'Business',
  },
  {
    id: 15,
    img: '/images/event/event-17.jpg',
    time: '06:00AM-08:00PM',
    title: 'Digital Arts & Reshaping the Future with AI',
    date: 'JAN 18, 2022',
    sm_desc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt.',
    event_meta: 'Newyork City, USA',
    event_list: true,
    category: 'Marketing',
  },
  {
    id: 16,
    img: '/images/event/event-18.jpg',
    time: '07:00AM-08:00PM',
    title: 'Online Presentation on PowerPoint 2022',
    date: 'DEC 18, 2022',
    sm_desc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt.',
    event_meta: 'Newyork City, USA',
    event_list: true,
    category: 'Art & Design',
  },
  {
    id: 17,
    img: '/images/event/event-19.jpg',
    time: '08:00AM-10:00PM',
    title: 'London International Conference',
    date: 'DEC 20, 2022',
    sm_desc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt.',
    event_meta: 'Newyork City, USA',
    event_list: true,
    category: 'Business',
  },
  {
    id: 18,
    img: '/images/event/event-19.jpg',
    time: '08:00AM-10:00PM',
    title: 'Digital Arts & Reshaping the Future with AI',
    date: 'DEC 22, 2022',
    sm_desc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt.',
    event_meta: 'Newyork City, USA',
    event_list: true,
    category: 'Marketing',
  },
  {
    id: 19,
    img: '/images/event/event-22.jpg',
    time: '07:00AM-08:00PM',
    title: 'Changes in Healthcare',
    date: 'DEC 18, 2022',
    sm_desc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt.',
    event_meta: 'Newyork City, USA',
    health_coach_event: true,
    category: 'Art & Design',
  },
  {
    id: 20,
    img: '/images/event/event-23.jpg',
    time: '08:00AM-10:00PM',
    title: 'Future Trends in Healthcare',
    date: 'DEC 20, 2022',
    sm_desc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt.',
    event_meta: 'Newyork City, USA',
    health_coach_event: true,
    category: 'Business',
  },
  {
    id: 21,
    img: '/images/event/event-24.jpg',
    time: '08:00AM-10:00PM',
    title: 'Health Education Plan',
    date: 'DEC 22, 2022',
    sm_desc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt.',
    event_meta: 'Newyork City, USA',
    health_coach_event: true,
    category: 'Marketing',
  },
];

export default podcast_data;
