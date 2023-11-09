import Link from 'next/link';

const staticRoutes: { [key: string]: string } = {
  '': 'Home',
  about: 'About',
  hiragana: 'Hiragana',
  katakana: 'Katakana',
  results: 'Results',
};

const Navbar: React.FC = () => {
  return (
    <nav className="p-4 bg-[#c07ce2]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Link href="/" className="text-white text-2xl font-bold">
            Hikana
          </Link>
        </div>
        <div className="flex space-x-4 font-light">
          {Object.entries(staticRoutes).map(
            ([path, title]: [string, string], idx: number) => (
              <Link
                key={idx}
                href={`/${path}`}
                className="text-white hover:text-gray-300"
              >
                {title}
              </Link>
            ),
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
