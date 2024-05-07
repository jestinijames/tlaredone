import Image from 'next/image';

interface SearchPopupProps {
  isSearchOpen: boolean;
  setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchPopup = ({ isSearchOpen, setIsSearchOpen }: SearchPopupProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className={`edu-search-popup ${isSearchOpen ? 'open' : ''}`}>
      <div className='content-wrap'>
        <div className='site-logo'>
          <Image
            className='logo-light'
            src='/images/logo/logo-dark-3.png'
            alt='TLA Logo'
            height={72}
            width={236}
          />
          <Image
            className='logo-dark'
            src='/images/logo/logo-light-3.png'
            alt='TLA Logo'
            height={72}
            width={236}
          />
        </div>
        <div className='close-button' onClick={() => setIsSearchOpen(false)}>
          <button className='close-trigger'>
            <i className='icon-73'></i>
          </button>
        </div>
        <div className='inner'>
          <form className='search-form' onSubmit={handleSubmit}>
            <input
              type='text'
              className='edublink-search-popup-field'
              placeholder='Search Here...'
            />
            <button className='submit-button'>
              <i className='icon-2'></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchPopup;
